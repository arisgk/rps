import * as actions from '../../actions/shared/types';

export default function reducer(state = null, action = {}) {
  switch (action.type) {
    case actions.GET_WEB3_SUCCESS:
      return action.web3;
    default:
      return state;
  }
}
