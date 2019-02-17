import * as index from '../../components';

describe('components index', () => {
    let { Menu, Home, Join, JoinForm, Login, LoginForm } = index;
    
    it('Menu', () => expect(Menu).toMatchSnapshot());
    it('Home', () => expect(Home).toMatchSnapshot());
    it('Join', () => expect(Join).toMatchSnapshot());
    it('JoinForm', () => expect(JoinForm).toMatchSnapshot());
    it('Login', () => expect(Login).toMatchSnapshot());
    it('LoginForm', () => expect(LoginForm).toMatchSnapshot());
});