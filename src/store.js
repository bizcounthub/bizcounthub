import { createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
//import { connectRouter } from 'connected-react-router';

import reducer from './reducer';
export const history = createHistory();
//export const store = createStore(connectRouter(history)(reducer));
export const store = createStore(reducer);
