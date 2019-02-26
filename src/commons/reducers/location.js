import * as ActionTypes from '../contants/action-types';

export const INITIAL_STATE = {
  /*
  lat, lng, address, division,currentLocation
  */
};

/**
 * Init location base on server side data and search_loc cookie
 * @param {Object} state
 * @param {Object} newLocation
 */
function initLocation(state, newLocation) {
  return Object.assign({}, state, newLocation);
}

function updateLocationBySearchLoc(state, action) {
  const { searchLoc } = action.payload || {};
  if (!searchLoc || !searchLoc.closestDivision) {
    return state;
  }

  const {
    lat,
    lng,
    closestDivision: division,
    currentLocation,
    fullAddress: address,
  } = searchLoc;
  return {
    ...state,
    lat,
    lng,
    division,
    currentLocation,
    address,
  };
}

// update reducer by actions
function locationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.INITIALIZE:
      return initLocation(state, action.payload.location);
    case ActionTypes.SEARCH_SUCCESS:
      return updateLocationBySearchLoc(state, action);
    default:
      return state;
  }
}

export default locationReducer;
