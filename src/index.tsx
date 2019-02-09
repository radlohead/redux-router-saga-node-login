import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './reducers';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root') as HTMLElement
);
serviceWorker.unregister();