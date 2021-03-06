import * as actions from '../../../actions/games/types';

const initialState = {
  game: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.CREATE_GAME_SUCCESS:
    case actions.GET_GAME_SUCCESS:
      return { ...state, game: action.game };
    case actions.PLAY_SUCCESS:
      return { ...state,
        game: {
          ...state.game,
          player2Move: action.player2Move,
          lastAction: action.lastAction,
        },
      };
    case actions.GAME_RESULT:
      return { ...state, game: { ...state.game, winner: action.winner } };
    default:
      return state;
  }
}
