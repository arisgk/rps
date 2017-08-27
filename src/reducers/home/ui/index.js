import * as sharedActions from '../../../actions/shared/types';
import * as gameActions from '../../../actions/games/types';

const initialState = {
  web3Ready: false,
  fetching: false,
  creating: false,
  loading: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case sharedActions.GET_WEB3_PROGRESS:
      return { ...state, web3Ready: false };
    case sharedActions.GET_WEB3_SUCCESS:
      return { ...state, web3Ready: true };
    case gameActions.CREATE_GAME_PROGRESS:
      return { ...state, creating: true };
    case gameActions.CREATE_GAME_SUCCESS:
      return { ...state, creating: false };
    case gameActions.GAME_PROGRESS:
      return { ...state, loading: true };
    case gameActions.PLAY_SUCCESS:
    case gameActions.GAME_RESULT:
      return { ...state, loading: false };
    case gameActions.GET_GAME_PROGRESS:
      return { ...state, fetching: true };
    case gameActions.GET_GAME_SUCCESS:
      return { ...state, fetching: false };
    default:
      return state;
  }
}
