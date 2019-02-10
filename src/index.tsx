import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare, logger))
);

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root') as HTMLElement
);
serviceWorker.unregister();