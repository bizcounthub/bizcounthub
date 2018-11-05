import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('pageWrapper'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();