import * as React from 'react';
import ReactDOM from 'react-dom';
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
    constructor(props: any) {
        super(props);
    }

    static defaultProps = { onGetLoginStatus: (data: {status: boolean}) => {} };

    private handleSubmit(values: ILoginSubmitType): void {
        const postLoginFetchApi = async (values?: any) => {
            const response = await axios.post(`${actions.BASE_SERVER_URL}/api/login`, values);
            const { onGetLoginStatus }: any = this.props;
            onGetLoginStatus(response.data);
            this.getRender(response.data.status, values.id);
        }
        postLoginFetchApi(values);
    }

    public getLoginSuccess(id: any): void {
        const refName = 'login';
        const ref: any = ReactDOM.findDOMNode(this.refs[refName]);
        ReactDOM.unmountComponentAtNode(ref);
        ReactDOM.render(
            <div>login success {id}</div>,
            ref
        );
    }

    public getLoginFailed(): JSX.Element|any {
        const refName = 'login';
        const ref: any = ReactDOM.findDOMNode(this.refs[refName]);
        ReactDOM.unmountComponentAtNode(ref);
        ReactDOM.render(
            <div>login failed</div>,
            ref
        );
    }

    public getRender(status?: any, id?: any): any {
        if(!status) this.getLoginFailed();
        else this.getLoginSuccess(id);
    }

    render(): JSX.Element {
        return (
            <>
                <div ref="login">
                    <LoginForm onSubmit={this.handleSubmit.bind(this)} />
                </div>
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