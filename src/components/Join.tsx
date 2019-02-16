import * as React from 'react';
import JoinForm from './JoinForm';
import { fetchPostsApi } from '../sagas';

class Join extends React.Component {
    handleSubmit(values: any): void {
        fetchPostsApi(values);
    }

    render(): JSX.Element {
        return (
            <>
                <JoinForm onSubmit={this.handleSubmit.bind(this)} />
            </>
        )
    }
}

export default Join;