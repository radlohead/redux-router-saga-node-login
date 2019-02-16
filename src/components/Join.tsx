import * as React from 'react';
import { JoinForm } from './index';
import { IJoinSubmitType } from './Types';
import { getJoinFetchApi } from '../sagas';

class Join extends React.Component {
    handleSubmit(values: IJoinSubmitType): void {
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