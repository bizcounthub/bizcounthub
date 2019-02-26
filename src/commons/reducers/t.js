import * as ActionTypes from '../contants/action-types';

export const INITIAL_STATE = {
  searchbar: {},
  search: {},
  categories: {},
};

function translationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.INITIALIZE:
      return Object.assign({}, state, action.payload.translation);
    default:
      return state;
  }
}

export default translationReducer;
