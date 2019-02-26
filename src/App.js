import React, { Component, lazy, Suspense } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ScrollMemory from 'react-router-scroll-memory';

import Root from './desktops/components/company/root';
import Home from './desktops/components/Home';


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
				<Root>
					<ScrollMemory />
					<Switch>
						<Route exact path="/" component={Home} />
						{/* <Route path="/signup" component={Signup} />
						<Route path="/store" component={Store} />
						<Route path="/signin" component={Signin} />
						<Route path="/deal/:id" component={SingleDeal} />
						<Route path="/term_condition" component={TermCondition} />
						<Route path="/faq" component={CustomerAssistance} />
						<Route path="/blankpage" component={Channel} />  */}
						{/* <Route component={NotFound} /> */}
					</Switch>
				</Root>
			</BrowserRouter >
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);