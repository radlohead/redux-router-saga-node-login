import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JoinForm from '../../components/JoinForm';
configure({ adapter: new Adapter() });

it('JoinForm test', () => {
    const component = shallow(<JoinForm />);
    expect(component).toBeTruthy();
});