import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../containers/App';
import store from '../../store';
import { Home, Menu, Join } from '../../components';
configure({ adapter: new Adapter() });

it('App test', () => {
    const component = mount(
        <Provider store={store}>
            <BrowserRouter>
                <Route>
                    <App />
                </Route>
            </BrowserRouter>
        </Provider>
    );

    const pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
    }, {});
    
    expect(component.find(Menu).length).toBe(1);
    expect(pathMap['/']).toBe(Home);
    expect(pathMap['/join']).toBe(Join);
});