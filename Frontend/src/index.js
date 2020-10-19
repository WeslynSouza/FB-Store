import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';

import reducers from './reducers';
import App from './App';

import icon from './assets/img/favicon.ico';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers, devTools);

ReactDOM.render(
  <Provider store={store}>
    <Favicon url={icon}/>
    <App />
  </Provider>,
  document.getElementById('root')
);

