import * as ActionTypes from '../contants/action-types';
import { suggestLocations } from '../helpers/locationSuggestions';
import { submitSearch, prefillLocation } from '../actions/search';
import { trackEvent } from '../helpers/track';
import { detectCurrentLocation } from '../helpers/geolocation';
import { saveItem } from '../helpers/storage';
import { getSearchLoc } from '../helpers/cookie';
import {
  removeRecentLocations,
  removeRecentLocationByIndex,
  postSearchData,
} from '../helpers/search';

export { prefillLocation };

const FIVE_MINUTES_IN_MS = 1000 * 60 * 5;

/** Get current location */
export function getCurrentPosition() {
  return (dispatch, getState) => {
    const { t } = getState();

    // start to call get current position API
    dispatch({
      type: ActionTypes.CURRENT_POSITION_REQUEST,
    });

    return detectCurrentLocation()
      .then(({ lat, lng }) => {
        trackEvent('location-bar-geolocation-success', { lat, lng });

        dispatch({
          type: ActionTypes.CURRENT_POSITION_SUCCESS,
          lat,
          lng,
        });

        const locationSuggestion = {
          lat,
          lng,
          currentLocation: true,
        };

        // Submit
        return dispatch(searchByLocation(locationSuggestion));
      })
      .catch(err => {
        trackEvent('location-bar-geolocation-error', err);
        return dispatch({
          type: ActionTypes.CURRENT_POSITION_FAILURE,
          error: {
            type: 'currentPositionError',
            error: err,
            message: t.error.locationAvailability,
          },
        });
      });
  };
}

/**
 * Update current location every 5 mins
 */
export function updateCurrentLocation() {
  return dispatch => {
    const searchLoc = getSearchLoc() || {};

    if (searchLoc.currentLocation) {
      saveItem('cll_TTL', Date.now() + FIVE_MINUTES_IN_MS);

      return detectCurrentLocation()
        .then(({ lat, lng }) => {
          dispatch({
            type: ActionTypes.CURRENT_POSITION_SUCCESS,
            lat,
            lng,
          });

          const locationSuggestion = {
            lat,
            lng,
            currentLocation: true,
          };

          // update current location again after 5mins
          setTimeout(() => {
            dispatch(updateCurrentLocation());
          }, FIVE_MINUTES_IN_MS);

          // send to API
          return postSearchData({ locationSuggestion }).then(result => {
            dispatch({
              type: ActionTypes.UPDATE_CURRENT_POSITION_SUCCESS,
              payload: result,
            });
          });
        })
        .catch(err => { }); // eslint-disable-line
    }
    return Promise.resolve();
  };
}

/**
 * Update location search keyword
 * @param {string} keyword - new keyword
 */
export function updateKeyword(keyword = '') {
  return {
    type: ActionTypes.UPDATE_LOCATION_SEARCH_KEYWORD,
    keyword,
  };
}

/**
 * Get suggestions by keyword
 * @param {string} keyword
 */
export const suggest = (keyword = '') => {
  return (dispatch, getState) => {
    if (!keyword) {
      return Promise.resolve();
    }

    const { locationSuggestions, location, app } = getState();
    // check cached result
    const cachedSuggestions = locationSuggestions[keyword];
    // loading or loaded
    if (cachedSuggestions && !cachedSuggestions.error) {
      return Promise.resolve();
    }

    dispatch({
      type: ActionTypes.LOCATIONS_SUGGEST_REQUEST,
      keyword,
    });

    // fetch result from API
    return suggestLocations(keyword, location, app.country)
      .then(suggestions =>
        dispatch({
          type: ActionTypes.LOCATIONS_SUGGEST_SUCCESS,
          keyword,
          suggestions: suggestions.map(item => ({
            ...item,
            type: item.locationId ? 'address' : 'location',
          })),
        })
      )
      .catch(err => {
        dispatch({
          type: ActionTypes.LOCATIONS_SUGGEST_FAILURE,
          error: err,
        });
      });
  };
};

/** Clear all recent locations */
export function clearAllRecentLocations() {
  removeRecentLocations();

  return {
    type: ActionTypes.UPDATE_RECENT_LOCATIONS,
    recentLocations: [],
  };
}

export function removeRecentLocation(index) {
  const recentLocations = removeRecentLocationByIndex(index);
  return {
    type: ActionTypes.UPDATE_RECENT_LOCATIONS,
    recentLocations,
  };
}

/**
 * Search by location from suggestion
 * @param {Object} locationSuggestion
 */
export function searchByLocation(locationSuggestion, isRecent) {
  return dispatch => {
    dispatch(prefillLocation(locationSuggestion, isRecent));
    return dispatch(submitSearch());
  };
}
