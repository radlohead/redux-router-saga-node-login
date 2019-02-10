import * as React from 'react';
import LoginForm from './LoginForm';

class Login extends React.Component {
    handleSubmit(values: any): void {
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