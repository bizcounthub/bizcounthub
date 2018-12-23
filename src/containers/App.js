import React, { Component, lazy, Suspense } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ScrollMemory from 'react-router-scroll-memory';

import Layout from '../components/layout/Layout';
import Home from './home/Home';
import About from './company/About';
import Signup from './authenticate/Singup';
import Signin from './authenticate/Signin';
import Store from './store/Store';
import SingleDeal from './deal/SingleDeal';
import TermCondition from './company/TermCondition';
import CustomerAssistance from './company/CustomerAssistance';
import NotFound from './error/404';

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
				<Switch>
					<Layout>
						<ScrollMemory />
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/signup" component={Signup} />
						<Route path="/store" component={Store} />
						<Route path="/signin" component={Signin} />
						<Route path="/deal/:id" component={SingleDeal} />
						<Route path="/term_condition" component={TermCondition} />
						<Route path="/faq" component={CustomerAssistance} />
						<Route component={NotFound} />
					</Layout>
				</Switch>
			</BrowserRouter >
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);