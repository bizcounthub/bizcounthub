import * as ActionTypes from '../contants/action-types';
import {
  suggestStarted,
  suggestFailed,
  suggestSuccess,
} from '../../commons/helpers/suggestions';

export const INITIAL_STATE = {};

function dealSuggestionsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.DEALS_SUGGEST_REQUEST:
      return suggestStarted(state, action);
    case ActionTypes.DEALS_SUGGEST_FAILURE:
      return suggestFailed(state, action);
    case ActionTypes.DEALS_SUGGEST_SUCCESS:
      return suggestSuccess(state, action);
    default:
      return state;
  }
}

export default dealSuggestionsReducer;
