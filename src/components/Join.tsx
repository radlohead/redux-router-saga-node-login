import * as React from 'react';
import JoinForm from './JoinForm';
import { getJoinFetchApi } from '../sagas';

class Join extends React.Component {
    handleSubmit(values: any): void {
        getJoinFetchApi(values);
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