import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './App';

import icon from './assets/img/favicon.ico';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, devTools);

ReactDOM.render(
  <Provider store={store}>
    <Favicon url={icon}/>
    <App />
  </Provider>,
  document.getElementById('root')
);

