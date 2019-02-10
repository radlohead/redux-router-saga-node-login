import * as React from 'react';
import { connect } from 'react-redux';
import JoinForm from './JoinForm';
import * as actions from '../actions';

class Join extends React.Component {
    handleClick(e: any) {
        e.preventDefault();
        const { onGetReceivePosts }: any = this.props;
        onGetReceivePosts();
    }

    handleSubmit(values: any): void {
        console.log('submit', values);
    }

    render(): JSX.Element {
        return (
            <>
                <JoinForm onSubmit={this.handleSubmit} />
                <button onClick={this.handleClick.bind(this)}>click</button>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onGetReceivePosts: () => dispatch(actions.getReceivePosts())
	}
}

export default connect(null, mapDispatchToProps)(Join);