import reducer from '../reducers';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare, logger))
);

sagaMiddleWare.run(rootSaga);

export default store;