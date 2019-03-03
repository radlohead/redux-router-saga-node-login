import * as React from "react";
import { Route } from 'react-router-dom';
import { Menu, Home, Join } from '../components';
import "./App.scss";

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