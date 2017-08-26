import { combineReducers } from 'redux';
import ui from './ui';
import entities from './entities';

const reducer = combineReducers({
  ui,
  entities,
});

export default reducer;
