import * as ActionTypes from '../contants/action-types';

export const INITIAL_STATE = {};

function flagsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.INITIALIZE:
      return Object.assign({}, state, action.payload.flags);
    default:
      return state;
  }
}

export default flagsReducer;
