import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import HomeView from './home/HomeView';
import AboutView from './company/AboutView';
import SignupView from './authenticate/SingupView';
import SigninView from './authenticate/SigninView';
import StoreView from './store/StoreView';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Route path="/" exact component={HomeView} />
					<Route path="/about" component={AboutView} />
					<Route path="/signup" component={SignupView} />
					<Route path="/store" component={StoreView} />
					<Route path="/signin" component={SigninView} />
				</Layout>
			</BrowserRouter >
		);
	}
}

export default App;
