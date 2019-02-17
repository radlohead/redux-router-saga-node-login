import * as React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Login, LoginForm } from '../../components';
import store from '../../store';
configure({ adapter: new Adapter() });

it('Login test', () => {
    const component = mount(
        <Provider store={store}>
            <Login />
        </Provider>
    );
    expect(component.find(LoginForm).length).toEqual(1);
    expect(component.find(LoginForm).prop('onSubmit').length).toEqual(1);
});