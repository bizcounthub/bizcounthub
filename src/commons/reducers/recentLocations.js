import * as ActionTypes from '../contants/action-types';

export const INITIAL_STATE = [];

const updateRecentLocations = (state, action) => {
  const { recentLocations } = action;
  if (!recentLocations) {
    return state;
  }

  return [...recentLocations];
};

function recentLocationsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_RECENT_LOCATIONS:
      return updateRecentLocations(state, action);
    default:
      return state;
  }
}

export default recentLocationsReducer;
