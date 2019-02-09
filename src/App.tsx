import * as React from "react";
import "./App.css";
import { Route, Switch } from 'react-router-dom';
import { Menu, About, Home, Posts } from './components/index';

class App extends React.Component {
	render() {
		return (
			<div>
				<Menu />
				<Route exact path='/' component={Home} />
				<Switch>
					<Route path="/about/:name" component={About} />
					<Route path="/about" component={About} />
				</Switch>
				<Route path="/posts" component={Posts} />
			</div>
		)
	}
}

export default App;