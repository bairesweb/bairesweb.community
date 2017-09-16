import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from 'sections/Layout/Layout';
import Home from 'sections/Home/Home';
import NotFound from 'sections/NotFound/NotFound';

import 'styles/styles.scss';

export class App extends Component {
	render() {
		return (
			<Layout>
				<Router>
					<Switch>
						<Route exact={true} path="/" component={Home} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</Layout>
		);
	}
}

export default App;
