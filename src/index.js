/* global document */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import Root from './containers/Root/';
import configureStore from './store/configureStore';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root'),
);
