import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ScrollMemory from 'react-router-scroll-memory';

import Layout from '../components/layout/Layout';
import HomeView from './home/HomeView';
import AboutView from './company/AboutView';
import SignupView from './authenticate/SingupView';
import SigninView from './authenticate/SigninView';
import StoreView from './store/StoreView';
import SingleDealView from './deal/SingleDealView';

const mapStateToProps = state => {
	return {
		// 	appLoaded: state.common.appLoaded,
		// 	appName: state.common.appName,
		// 	currentUser: state.common.currentUser,
		// 	redirectTo: state.common.redirectTo
	}
};

const mapDispatchToProps = dispatch => ({
	// onLoad: (payload, token) =>
	// 	dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
	// onRedirect: () =>
	// 	dispatch({ type: REDIRECT })
});

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<ScrollMemory />
					<Route path="/" exact component={HomeView} />
					<Route path="/about" component={AboutView} />
					<Route path="/signup" component={SignupView} />
					<Route path="/store" component={StoreView} />
					<Route path="/signin" component={SigninView} />
					<Route path="/deal/:id" component={SingleDealView} />
				</Layout>
			</BrowserRouter>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);