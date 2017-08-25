import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory';
import Root from './containers/Root/';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import App from './App'

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root'),
);

registerServiceWorker();
