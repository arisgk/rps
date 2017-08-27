import crypto from 'crypto';
import contract from 'truffle-contract';
import * as types from './types';
import getWeb3 from '../../utils/getWeb3';
import HasherContract from '../../../build/contracts/Hasher.json';
import RPSContract from '../../../build/contracts/RPS.json';
import moves from '../../schemas/moves';

const createGameProgress = () => ({
  type: types.CREATE_GAME_PROGRESS,
});

const createGameSuccess = game => ({
  type: types.CREATE_GAME_SUCCESS,
  game,
});

const gameResult = winner => ({
  type: types.GAME_RESULT,
  winner,
});

const getBalance = address => new Promise((resolve, reject) => {
  getWeb3.then((results) => {
    const web3 = results.web3;
    web3.eth.getBalance(address, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
});

const startPollingForWin = (dispatch, address, move, salt) => {
  let web3;

  getWeb3.then((results) => {
    web3 = results.web3;
  });

  const polling = setInterval(() => {
    const RPS = contract(RPSContract);
    RPS.setProvider(web3.currentProvider);

    return RPS.at(address)
      .then(rps => rps.solve.call(move, salt))
      .then((winner) => {
        dispatch(gameResult(winner));
        clearInterval(polling);
      });
  }, 15000);
};

export const createGame = game => (dispatch) => {
  dispatch(createGameProgress());

  const committedGame = {};

  getWeb3.then((results) => {
    const web3 = results.web3;

    const Hasher = contract(HasherContract);
    Hasher.setProvider(web3.currentProvider);

    Hasher.deployed()
      .then((hasher) => {
        const saltHex = crypto.randomBytes(32).toString('hex');
        const salt = web3.toBigNumber(`0x${saltHex}`);
        committedGame.salt = salt;
        return hasher.hash(moves.indexOf(game.move), salt);
      })
      .then((hash) => {
        const RPS = contract(RPSContract);
        RPS.setProvider(web3.currentProvider);
        const stake = Number(game.stake);

        return RPS.new(web3.toBigNumber(hash), game.opponent, {
          from: web3.eth.accounts[0],
          value: web3.toBigNumber(stake * (10 ** 18)),
        });
      })
      .then((rps) => {
        committedGame.address = rps.address;
        return rps.lastAction.call();
      })
      .then((lastAction) => {
        const lastActionDate = new Date(Number(lastAction.toString()) * 1000);

        committedGame.player1 = web3.eth.accounts[0];
        committedGame.player2 = game.opponent;
        committedGame.player1Move = game.move;
        committedGame.stake = Number(game.stake);
        committedGame.lastAction = lastActionDate;

        dispatch(createGameSuccess(committedGame));
        startPollingForWin(dispatch, committedGame.address,
          moves.indexOf(game.move), committedGame.salt);
      });
  });
};

const gameProgress = () => ({
  type: types.GAME_PROGRESS,
});

export const claimWin = address => (dispatch) => {
  dispatch(gameProgress());

  getWeb3.then((results) => {
    const web3 = results.web3;

    const RPS = contract(RPSContract);
    RPS.setProvider(web3.currentProvider);

    return RPS.at(address)
      .then(rps => rps.j2Timeout())
      .then(() => {
        dispatch(gameResult(web3.eth.accounts[0]));
      });
  });
};

const getGameProgress = () => ({
  type: types.GET_GAME_PROGRESS,
});

const getGameSuccess = game => ({
  type: types.GET_GAME_SUCCESS,
  game,
});

export const getGame = address => (dispatch) => {
  dispatch(getGameProgress());

  const committedGame = {};

  getWeb3.then((results) => {
    const web3 = results.web3;

    const RPS = contract(RPSContract);
    RPS.setProvider(web3.currentProvider);

    RPS.at(address)
      .then(rps => Promise.all([
        rps.j1.call(),
        rps.j2.call(),
        rps.stake.call(),
        rps.lastAction.call(),
      ]))
      .then(([player1, player2, stake, lastAction]) => {
        committedGame.player1 = player1;
        committedGame.player2 = player2;
        committedGame.stake = Number(web3.fromWei(stake.toString(), 'ether'));
        committedGame.lastAction = new Date(Number(lastAction.toString()) * 1000);
        committedGame.address = address;

        dispatch(getGameSuccess(committedGame));
      });
  });
};

export const playSuccess = ({ player2Move, lastAction }) => ({
  type: types.PLAY_SUCCESS,
  player2Move,
  lastAction,
});

export const play = data => (dispatch) => {
  dispatch(gameProgress());

  const address = data.address;
  const move = data.move;

  getWeb3.then((results) => {
    const web3 = results.web3;

    const RPS = contract(RPSContract);
    RPS.setProvider(web3.currentProvider);

    let rps;

    return RPS.at(address)
      .then((instance) => {
        rps = instance;
        return rps.stake.call();
      })
      .then(st => rps.play(moves.indexOf(move), {
        from: web3.eth.accounts[0],
        value: st,
      }))
      .then(() => rps.lastAction.call())
      .then((lastAction) => {
        dispatch(playSuccess({
          player2Move: move,
          lastAction: new Date(Number(lastAction.toString()) * 1000),
        }));
      });
  });
};
