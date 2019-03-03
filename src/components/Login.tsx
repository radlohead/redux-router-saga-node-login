import * as React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import axios from 'axios';
import { LoginForm } from './index';
import * as Types from './Types';
import * as actions from '../actions';

interface ILoginProps {
    onGetLoginStatus(data: {status: boolean}): void;
}

class Login extends React.Component<ILoginProps> {
    static defaultProps = { onGetLoginStatus: (data: Types.IStatusType) => {} };

    private handleSubmit(values: Types.ILoginSubmitType): void {
        const postLoginFetchApi = async (values: Types.ILoginSubmitType) => {
            const response = await axios.post(`${actions.BASE_SERVER_URL}/api/login`, values);
            const { onGetLoginStatus } = this.props;
            
            onGetLoginStatus(response.data);
            this.getRender(response.data.status, values.id);
        }
        postLoginFetchApi(values);
    }

    public getLoginSuccess(id: string|undefined): void {
        const refName = 'login';
        const ref = ReactDOM.findDOMNode(this.refs[refName]) as HTMLDivElement;
        ReactDOM.unmountComponentAtNode(ref);
        ReactDOM.render(
            <div>login success {id}</div>,
            ref
        );
    }

    public getLoginFailed(): void {
        const refName = 'login';
        const ref = ReactDOM.findDOMNode(this.refs[refName]) as HTMLDivElement;
        ReactDOM.unmountComponentAtNode(ref);
        ReactDOM.render(
            <div>login failed</div>,
            ref
        );
    }

    public getRender(status?: boolean, id?: string|undefined): void {
        if(!status) this.getLoginFailed();
        else this.getLoginSuccess(id);
    }

    render(): JSX.Element {
        return (
            <>
                <div ref='login'>
                    <LoginForm onSubmit={this.handleSubmit.bind(this)} />
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onGetLoginStatus: bindActionCreators(actions.getLoginStatus, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Login);