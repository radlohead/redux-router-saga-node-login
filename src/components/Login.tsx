import * as React from 'react';
import { LoginForm } from './index';
import { ILoginSubmitType } from './Types';
import { getLoginFetchApi } from '../sagas';
import axios from 'axios';
import * as actions from '../actions';

class Login extends React.Component {
    handleSubmit(values: ILoginSubmitType): void {
        getLoginFetchApi(values);

        const postLoginFetchApi = async (values?: any) => {
            const response = await axios.post(`${actions.BASE_SERVER_URL}/api/login`, values);
            console.log('handleSubmit', response.data, values);
        }
        postLoginFetchApi(values);
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