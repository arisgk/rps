import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import web3 from './web3';
import home from './home';

const reducer = combineReducers({
  routing,
  web3,
  home,
});

export default reducer;
