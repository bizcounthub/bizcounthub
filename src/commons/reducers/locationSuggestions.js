import * as ActionTypes from '../contants/action-types';
import {
  suggestStarted,
  suggestFailed,
  suggestSuccess,
} from '../helpers/suggestions';

export const INITIAL_STATE = {};

// reducer for location suggestions
// the data is stored as a hashmap
//  key is the keyword
//  value is the suggestions with the keyword
function locationSuggestionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.LOCATIONS_SUGGEST_REQUEST:
      return suggestStarted(state, action);
    case ActionTypes.LOCATIONS_SUGGEST_FAILURE:
      return suggestFailed(state, action);
    case ActionTypes.LOCATIONS_SUGGEST_SUCCESS:
      return suggestSuccess(state, action);
    default:
      return state;
  }
}

export default locationSuggestionsReducer;
