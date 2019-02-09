import * as React from "react";
import "./App.scss";
import Join from '../components/Join';

class App extends React.Component {
	handleSubmit(values: any): void {
		console.log('submit', values);
	}

	render() {
		return (
			<>
				<Join onSubmit={this.handleSubmit} />
			</>
		)
	}
}

export default App;