import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from '../../components/LoginForm';
import store from '../../store';
configure({ adapter: new Adapter() });

it('LoginForm test', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <LoginForm />
        </Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});