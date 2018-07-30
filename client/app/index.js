import React from 'react';
import { render } from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import allReducers from './reducers/index';

import Main from './containers/main';

const logger = createLogger();

const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger)
);

render((
  <Provider store={store}>
    <Main/>
  </Provider>
), document.getElementById('app'));
