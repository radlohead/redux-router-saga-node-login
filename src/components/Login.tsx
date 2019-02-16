import * as React from 'react';
import { LoginForm } from './index';
import { ILoginSubmitType } from './Types';

class Login extends React.Component {
    handleSubmit(values: ILoginSubmitType): void {
        console.log('submit', values);
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