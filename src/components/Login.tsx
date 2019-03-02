import * as React from 'react';
import { LoginForm } from './index';
import { ILoginSubmitType } from './Types';
import { getLoginFetchApi } from '../sagas';

class Login extends React.Component {
    handleSubmit(values: ILoginSubmitType): void {
        getLoginFetchApi(values);
    }

    render(): JSX.Element {
        return (
            <>
                <LoginForm onSubmit={this.handleSubmit} />
            </>
        )
    }
}

export default Login;