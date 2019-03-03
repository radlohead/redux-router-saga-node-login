import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { LoginForm } from './index';
import { ILoginSubmitType } from './Types';
import axios from 'axios';
import * as actions from '../actions';

interface ILoginProps {
    onGetLoginStatus(data: {status: boolean}): void;
}

class Login extends React.Component<ILoginProps> {
    static defaultProps = { onGetLoginStatus: (data: {status: boolean}) => {} };

    private handleSubmit(values: ILoginSubmitType): void {
        const postLoginFetchApi = async (values?: any) => {
            const response = await axios.post(`${actions.BASE_SERVER_URL}/api/login`, values);
            const { onGetLoginStatus } = this.props;
            onGetLoginStatus(response.data);
        }
        postLoginFetchApi(values);
    }

    render(): JSX.Element {
        return (
            <>
                <LoginForm onSubmit={this.handleSubmit.bind(this)} />
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        onGetLoginStatus: bindActionCreators(actions.getLoginStatus, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);