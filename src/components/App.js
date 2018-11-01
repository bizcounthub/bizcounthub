import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';


import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
	uri: 'https://graphsql-postgres.herokuapp.com/v1alpha1/graphql',
	headers: {
		'x-hasura-access-key': 'Hello@m!n2018'
	}
});
client.query({
	query: gql`{
			cstm_store {
		  	id
		  	name,
		  	logo
			}
		}`,
})
	.then(data => console.log(data))
	.catch(error => console.error(error));


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
