import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import Post from './Post';

const Posts = ({match}: any) => {
    return (
        <>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
            </ul>
            <Route exact path={match.url} render={()=>(<h3>exact Post</h3>)} />
            <Route path={`${match.url}/:id`} component={Post} />
        </>
    )
};

export default Posts;