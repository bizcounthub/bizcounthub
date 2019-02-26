import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const configureStore = initialState =>
  createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );

export default configureStore;


// import { createStore, applyMiddleware } from 'redux';
// import createHistory from 'history/createBrowserHistory';
// import { connectRouter } from 'connected-react-router';

// import reducer from './reducer';
// export const history = createHistory();
// export const store = createStore(connectRouter(history)(reducer));
