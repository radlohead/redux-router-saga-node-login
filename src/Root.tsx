import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

class Root extends React.Component {
	render(): JSX.Element {
		return (
			<BrowserRouter>
				<App />
			</BrowserRouter>
		)
	}
}

export default Root;