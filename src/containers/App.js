import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import Home from '../components/home/Home';
import AboutUs from '../components/company/About';
import Register from '../components/authenticate/Register';

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
					<Route path="/register" component={Register} />
				</Layout>
			</BrowserRouter >
		);
	}
}

export default App;
