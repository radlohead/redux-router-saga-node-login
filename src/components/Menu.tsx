import * as React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/foo">About Foo</Link></li>
                <li><Link to="/posts">Post</Link></li>
            </ul>
        </>
    )
}

export default Menu;