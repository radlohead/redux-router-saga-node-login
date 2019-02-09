import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        fontSize: '2em'
    }

    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
            <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
        </ul>
    )
};

export default Menu;