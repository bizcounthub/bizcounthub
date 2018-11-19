import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store';


const graphqlServerHttps = createHttpLink({
  uri: 'https://graphsql-postgres.herokuapp.com/v1alpha1/graphql'
});

const client = new ApolloClient({
  link: graphqlServerHttps,
  cache: new InMemoryCache()
});

const app = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(app, document.getElementById('pageWrapper'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();