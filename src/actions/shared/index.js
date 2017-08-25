import * as types from './types';
import getWeb3 from '../../../utils/getWeb3';

const getWeb3Progress = () => ({
  type: types.GET_WEB3_PROGRESS,
});

export function loadWeb3(dispatch) {
  dispatch(getWeb3Progress());
}
