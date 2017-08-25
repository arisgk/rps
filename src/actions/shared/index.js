import * as types from './types';
import getWeb3 from '../../utils/getWeb3';

const getWeb3Progress = () => ({
  type: types.GET_WEB3_PROGRESS,
});

const web3Sucess = web3 => ({
  type: types.GET_WEB3_SUCCESS,
  web3,
});

export const loadWeb3 = () => (dispatch) => {
  dispatch(getWeb3Progress());
  return getWeb3.then(results => dispatch(web3Sucess(results.web3)));
};
