import * as React from 'react';
import { Provider } from 'react-redux';
import { Join, JoinForm } from '../../components';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../../store';
configure({ adapter: new Adapter() });

it('components Join test', () => {
    const component = mount(
        <Provider store={store}>
            <Join />
        </Provider>
    );

    expect(component.find(JoinForm).length).toEqual(1);
    expect(component.find(JoinForm).prop('onSubmit').length).toEqual(1);
});