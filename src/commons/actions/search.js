import * as ActionTypes from '../contants/action-types';
import { postSearchData } from '../helpers/search';
import { getSearchLoc } from '../helpers/cookie';
import { trackEvent } from '../helpers/track';
import { geocode } from '../helpers/googleMaps';
import { paramsToQueryString } from '../helpers/url';
import { locale } from '../helpers/head-data';

/**
 * Change search context
 * @param {String} context - "deal" or "location"
 */
export function switchContext(context) {
  return {
    type: ActionTypes.SWITCH_SEARCH_CONTEXT,
    context,
  };
}

/**
 * Open the search panel with context
 * @param {String} context - "deal" or "location"
 */
export function openSearch(context = 'deal') {
  return {
    type: ActionTypes.OPEN_SEARCH,
    context,
  };
}

export function closeSearch() {
  return (dispatch, getState) => {
    const { search } = getState();
    if (search.error) {
      dispatch(clearError());
    }
    dispatch({
      type: ActionTypes.CLOSE_SEARCH,
    });
  };
}

export function clearError() {
  return {
    type: ActionTypes.SEARCH_CLEAR_ERROR,
  };
}

/**
 * Focus on the search input
 */
export function focusSearchInput() {
  trackEvent('searchbar-focusin');
  return {
    type: ActionTypes.SEARCH_INPUT_FOCUS,
  };
}

/**
 * Lost the focus
 */
export function blurSearchInput() {
  trackEvent('searchbar-focusout');
  return {
    type: ActionTypes.SEARCH_INPUT_BLUR,
  };
}

export function resetKeywords() {
  return {
    type: ActionTypes.REST_SEARCH_KEYWORDS,
  };
}

export function trackSearch(hasLocCookie, trackingData) {
  let eventName;
  if (trackingData.query) {
    eventName = `deal-search-with${hasLocCookie ? '' : '-no'}-loc-cookie`;
  } else {
    eventName = 'location-search';
  }
  trackEvent(eventName, trackingData);
}

/**
 * Get location data before submit to server API
 * @param {Object} locationSearch - the locationSearch state
 * @param {Object} locationSuggestions - cached location suggestions
 * @returns {Promise} - The location suggestion data
 */
function getLocationByAddress(locationSearch, locationSuggestions) {
  const { keyword: address, locationSuggestion } = locationSearch;
  if (locationSuggestion) {
    return locationSuggestion;
  }

  if (address) {
    // Try to use cached result
    const { suggestions } = locationSuggestions[address] || {};
    const [suggestion] = suggestions || [];
    if (suggestion) {
      return suggestion;
    }
  }

  // get location from google map API
  return null;
}

export function prefillLocation(locationSuggestion, isRecent) {
  return {
    type: ActionTypes.SEARCH_PREFILL_LOCATION,
    locationSuggestion,
    isRecent,
  };
}

export function prefillDeal(dealSuggestion, isRecent) {
  return dispatch => {
    if (dealSuggestion && dealSuggestion.value) {
      dispatch({
        type: ActionTypes.SEARCH_PREFILL_DEAL,
        dealSuggestion,
        isRecent,
      });
    }
  };
}

export function getLocationFromGeocode(address) {
  return (dispatch, getState) => {
    const { t, dealSearch } = getState();
    const { keyword: dealKeyword } = dealSearch;

    dispatch({
      type: ActionTypes.GEOCODE_REQUEST,
    });

    return geocode(address)
      .then(locationSuggestion => {
        dispatch({
          type: ActionTypes.GEOCODE_SUCCESS,
        });

        if (locationSuggestion) {
          dispatch(prefillLocation(locationSuggestion));
        }

        return dispatch(submitSearch());
      })
      .catch(err => {
        const { status } = err || {};
        const message =
          status === 'ZERO_RESULTS'
            ? t.error.badLocation
            : t.error.locationAvailability;
        const error = {
          type: 'geoError',
          error: err,
          message,
        };

        const trackingData = { query: dealKeyword, address };
        trackEvent('location-bar-geocode-search-error', trackingData);
        dispatch({
          type: ActionTypes.GEOCODE_FAILURE,
          error,
        });
      });
  };
}

/**
 * User pressed enter to submit search
 */
export function manualSearch() {
  return (dispatch, getState) => {
    const { locationSearch, locationSuggestions } = getState();
    const { keyword: address } = locationSearch;

    const locationSuggestion = getLocationByAddress(
      locationSearch,
      locationSuggestions
    );

    // get location from google map api
    if (!locationSuggestion && address) {
      return dispatch(getLocationFromGeocode(address));
    }

    if (locationSuggestion) {
      dispatch(prefillLocation(locationSuggestion));
    }

    return dispatch(submitSearch());
  };
}

export function submitSearch() {
  return (dispatch, getState) => {
    const state = getState();
    const hasLocCookie = !!getSearchLoc();
    const { t, location, locationSearch, dealSearch, search } = state;
    const { locationSuggestion, keyword: locationKeyword } = locationSearch;
    const { keyword: dealKeyword } = dealSearch;
    let dealSuggestion = dealSearch.dealSuggestion;

    // submitting
    if (search.submitting) {
      return Promise.resolve();
    }

    const trackingData = {
      query: dealKeyword,
      address: locationKeyword,
      location,
    };

    if (!dealSuggestion && dealKeyword) {
      dealSuggestion = { value: dealKeyword };
      dispatch(prefillDeal(dealSuggestion));
    }

    if (locationSuggestion) {
      trackEvent('location-bar-autocomplete-successful-match', trackingData);
      if (locationSuggestion && locationSuggestion.currentLocation) {
        trackEvent('location-bar-geolocation-search-success', trackingData);
      }
    }

    const postData = {
      dealSuggestion,
      locationSuggestion,
      location,
    };

    // no invalid data
    if (!locationSuggestion && !dealSuggestion) {
      const searchParams = Object.assign({}, location, {
        locale,
        division: undefined,
      });
      dispatch({
        type: ActionTypes.SEARCH_SUCCESS,
        payload: {
          status: 'REDIRECT',
          url: `/browse/${location.division}?${paramsToQueryString(
            searchParams
          )}`,
        },
      });
      return Promise.resolve();
    }

    dispatch({
      type: ActionTypes.SEARCH_SUBMIT,
      ...postData,
    });

    return postSearchData(postData)
      .then(result => {
        trackSearch(hasLocCookie, trackingData);
        return dispatch({
          type: ActionTypes.SEARCH_SUCCESS,
          payload: result,
        });
      })
      .catch(err => {
        const error = (err && err.error) || 'UNAVAILABLE';
        trackEvent('location-bar-geocode-search-error', trackingData);
        return dispatch({
          type: ActionTypes.SEARCH_FAILURE,
          error: {
            type: 'searchError',
            error,
            message: t.error.locationAvailability,
          },
        });
      });
  };
}
