import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './App';

import icon from './assets/img/favicon.ico';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Favicon url={icon}/>
    <App />
  </Provider>,
  document.getElementById('root')
);

