import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from '../../components/LoginForm';
configure({ adapter: new Adapter() });

it('LoginForm test', () => {
    const component = shallow(<LoginForm />);
    expect(component).toBeTruthy();
});