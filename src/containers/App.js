import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import HomeView from './home/HomeView';
import AboutView from './company/AboutView';
import RegisterView from './authenticate/RegisterView';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Route path="/" exact component={HomeView} />
					<Route path="/about" component={AboutView} />
					<Route path="/register" component={RegisterView} />
				</Layout>
			</BrowserRouter >
		);
	}
}

export default App;
