import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';

class App extends Component {
	render() {
		return (
			<BrowserRouter >
				<Layout>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={AboutUs} />
				</Layout>
			</BrowserRouter >
		);
	}
}

export default App;
