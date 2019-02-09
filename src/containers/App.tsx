import * as React from "react";
import { Route } from 'react-router-dom';
import "./App.scss";
import { Menu, Home, Join } from '../components';

class App extends React.Component {
	render() {
		return (
			<>	
				<Menu />
				<Route exact path="/" component={Home} />
				<Route path="/join" component={Join} />
			</>
		)
	}
}

export default App;