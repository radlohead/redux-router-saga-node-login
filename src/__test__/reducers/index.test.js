import reducer from '../../reducers';
import * as Types from '../../actions';

describe('reducers test', () => {
    it('should return the initial test', () => {
        const mockData = {
            form: {},
            state: {}
        }
        expect(reducer(undefined, {})).toEqual(mockData);
    });

    it('should handle POST_JOIN_FETCH_REQUEST initial test', () => {
        expect(reducer({}, {
            type: Types.POST_JOIN_FETCH_REQUEST,
            posts: {}
        })).toEqual({
            form: {},
            state: {
                posts: {}
            }
        });
    });

    it('should handle POST_JOIN_FETCH_REQUEST', () => {
        const mockData = {
            name: 'minho',
            id: 'radlohead',
            password: 1234
        }

        expect(reducer({}, {
            type: Types.POST_JOIN_FETCH_REQUEST,
            posts: mockData
        })).toEqual({
            form: {},
            state: {
                posts: mockData
            }
        });
    });

    it('should handle JOIN_FETCH_COMPLETE', () => {
        expect(reducer({}, {
            type: Types.JOIN_FETCH_COMPLETE
        })).toEqual({
            form: {},
            state: {}
        });
    });
});