import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from './Home/Home';

class App extends Component {
	render() {
		return (
			<Layout>
				<Home />
			</Layout>
		);
	}
}

export default App;
