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
        return hasher.hash(moves.indexOf(game.move), salt);
      })
      .then((hash) => {
        const RPS = contract(RPSContract);
        RPS.setProvider(web3.currentProvider);
        const stake = Number(game.stake);

        return RPS.new([web3.toBigNumber(hash), game.opponent], {
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
        committedGame.stake = game.stake;
        committedGame.lastAction = lastActionDate;

        dispatch(createGameSuccess(committedGame));
      });
  });
};

const gameProgress = () => ({
  type: types.GAME_PROGRESS,
});

const gameResult = winner => ({
  type: types.GAME_RESULT,
  winner,
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
        committedGame.stake = stake.toString();
        committedGame.lastAction = new Date(Number(lastAction.toString()) * 1000);
        committedGame.address = address;

        dispatch(getGameSuccess(committedGame));
      });
  });
};
