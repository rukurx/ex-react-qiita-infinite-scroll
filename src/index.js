import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import reducer from './reducers';
import App from './components/App';

const initialState = {
    posts: [
    ],
    loading: {
        isActive: false
    }
};

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
        sagaMiddleware,
        logger
    )
);
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
