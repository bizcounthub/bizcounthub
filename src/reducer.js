import { combineReducers } from 'redux'

import home from './reducers/home';
import store from './reducers/store';

export default combineReducers({
  home,
  store
});
