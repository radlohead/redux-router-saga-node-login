import * as actions from '../../actions';

it('setJoinReceivePosts test', () => {
    const data = { test: 'data' };
    const result = {
        type: actions.POST_JOIN_FETCH_REQUEST,
        posts: data
    }
    expect(actions.setJoinReceivePosts(data)).toEqual(result);
});

it('getReceivePosts test', () => {
    const result = { type: actions.JOIN_FETCH_COMPLETE };
    expect(actions.getReceivePosts(result)).toEqual(result);
});