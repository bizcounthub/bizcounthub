import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from './desktops/store';

const store = createStore();

const graphqlServerHttps = createHttpLink({
  uri: 'https://graphsql-postgres.herokuapp.com/v1alpha1/graphql'
});

const client = new ApolloClient({
  link: graphqlServerHttps,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider >
  , document.getElementById('bizcounthub-app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();