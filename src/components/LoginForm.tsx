import * as React from "react";
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props: any) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>아이디</label>
                    <div>
                        <Field
                            name="id"
                            component="input"
                            type="text"
                            placeholder="아이디를 입력해 주세요"
                        />
                    </div>
                </div>
                <div>
                    <label>패스워드</label>
                    <div>
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            placeholder="비밀번호를 입력해 주세요"
                        />
                    </div>
                </div>
            </div>
            <div>
                <button type="submit">로그인</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm);