import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as Types from '../../actions';
configure({ adapter: new Adapter() });

const sucess = () => {
    return {
        type: Types.JOIN_FETCH_COMPLETE
    }
}

const fetchData = () => {
    return dispatch => {
        return fetch('https://my-json-server.typicode.com/typicode/demo/db')
            .then(() => dispatch(sucess()));
    }
}

it('store test', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    let store = mockStore({});

    return store.dispatch(fetchData())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual(sucess());
        });
});