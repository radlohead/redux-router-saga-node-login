import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../../components/Menu';

it('Menu test', () => {
    const div = document.createElement('div');
    
    ReactDOM.render(
        <BrowserRouter>
            <Menu />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});