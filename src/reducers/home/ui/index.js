import * as actions from '../../../actions/shared/types';

export default function reducer(state = { web3Ready: false }, action = {}) {
  switch (action.type) {
    case actions.GET_WEB3_PROGRESS:
      return { ...state, web3Ready: false };
    case actions.GET_WEB3_SUCCESS:
      return { ...state, web3Ready: true };
    default:
      return state;
  }
}
