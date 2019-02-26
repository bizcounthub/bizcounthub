import * as ActionTypes from '../contants/action-types';

export const INITIAL_STATE = [];

const updateRecentSearches = (state, action) => {
  const { recentSearches } = action;
  if (!recentSearches) {
    return state;
  }

  return [...recentSearches];
};

function recentSearchesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_RECENT_SEARCHES:
      return updateRecentSearches(state, action);
    default:
      return state;
  }
}

export default recentSearchesReducer;
