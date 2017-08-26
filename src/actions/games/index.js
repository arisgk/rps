import crypto from 'crypto';
import contract from 'truffle-contract';
import * as types from './types';
import getWeb3 from '../../utils/getWeb3';
import { hex2bin } from '../../utils/string';
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

  getWeb3.then((results) => {
    const web3 = results.web3;

    const Hasher = contract(HasherContract);
    Hasher.setProvider(web3.currentProvider);

    Hasher.deployed().then((hasher) => {
      const saltHex = crypto.randomBytes(32).toString('hex');
      const salt = web3.toBigNumber(`0x${saltHex}`);
      return hasher.hash(moves.indexOf(game.move), salt);
    }).then((hash) => {
      const RPS = contract(RPSContract);
      RPS.setProvider(web3.currentProvider);
      const stake = Number(game.stake);

      return RPS.new([web3.toBigNumber(hash), game.opponent], {
        from: web3.eth.accounts[0],
        value: web3.toBigNumber(stake * (10 ** 18)),
      });
    }).then(rps => dispatch(createGameSuccess(rps)));
  });
};
