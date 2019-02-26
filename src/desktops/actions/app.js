import * as ActionTypes from 'app/common/constants/action-types';
import {
  getSearchLoc,
  setELLFromSearchLoc,
  saveSearchLoc,
} from 'app/common/helpers/cookie';
import { getQueryStringValue } from 'app/common/helpers/url';
import { loadUserFromSession } from 'app/common/helpers/auth';
import { loadInAppMessages } from 'app/common/actions/inAppMessages';
import { loadAuth } from 'app/common/actions/auth';
import { loadCartSize } from 'app/common/actions/cart';
import { initCllTimer } from 'app/common/actions/app';
import { loadNavbarCards, loadSubnav } from 'app/desktop/actions/navbar';
import {
  getRecentSearches,
  getRecentLocations,
} from 'app/common/helpers/search';

/** Init state by server side data and local data */
export function init(initState) {
  const { location } = initState;
  const searchLoc = getSearchLoc() || {};
  const search = {
    query: getQueryStringValue('query'), // get query param from url
  };
  const {
    lat,
    lng,
    closestDivision: division,
    currentLocation,
    fullAddress: address,
  } = searchLoc;
  const user = loadUserFromSession();
  const auth = {
    user,
    error: null,
    isAuthenticated: user ? true : undefined,
  };

  saveSearchLoc(searchLoc); // save search_loc cookie and tirm lat/lng
  setELLFromSearchLoc(); // set ELL from searchLoc cookie

  return {
    type: ActionTypes.INITIALIZE,
    payload: Object.assign(initState, {
      searchLoc,
      search,
      auth,
      location: {
        ...location,
        lat: lat || location.lat,
        lng: lng || location.lng,
        division: division || location.division,
        address: address || location.address,
        currentLocation: currentLocation || location.currentLocation,
      },
    }),
  };
}

export function fetchData() {
  return (dispatch, getState) => {
    return new Promise(resolve => {
      const state = getState();

      dispatch(loadAuth()); // load user auth info
      // load stored recent searches
      const recentSearches = getRecentSearches();
      dispatch({
        type: ActionTypes.UPDATE_RECENT_SEARCHES,
        recentSearches,
      });

      // load stored recent locations
      const recentLocations = getRecentLocations();
      dispatch({
        type: ActionTypes.UPDATE_RECENT_LOCATIONS,
        recentLocations,
      });

      // set up cll timer
      dispatch(initCllTimer());

      if (state.flags.lazyLoadSubnav) {
        dispatch(loadSubnav());
      } else {
        dispatch(loadNavbarCards());
      }

      // load iam
      Promise.all([dispatch(loadInAppMessages()), dispatch(loadCartSize())])
        .then(() => resolve())
        .catch(() => {});
    });
  };
}
