import * as React from 'react';
import { Home, Login } from '../../components/index';

it('Home test', () => {
    expect(Home()).toEqual(<React.Fragment><Login /></React.Fragment>);
});