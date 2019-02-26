import * as ActionTypes from '../contants/action-types';
import {
  removeRecentSearches,
  removeRecentSearchByIndex,
} from '../helpers/search';
import { manualSearch, prefillDeal } from '../actions/search';
import { suggestDeals } from '../helpers/dealSuggestions';

export { prefillDeal };

/**
 * Update deal search keyword
 * @param {string} keyword - new keyword
 */
export function updateKeyword(keyword = '') {
  return {
    type: ActionTypes.UPDATE_DEAL_SEARCH_KEYWORD,
    keyword,
  };
}

/**
 * Get suggestions by keyword
 * @param {String} query
 */
export const suggest = (keyword = '') => {
  return (dispatch, getState) => {
    if (!keyword) {
      console.log('search:', Promise.resolve());
      return Promise.resolve();
    }

    const {
      dealSuggestions,
      location: { lat, lng },
      app: { country, mobile },
    } = getState();

    // check cached result
    // loading or loaded
    const cachedSuggestion = dealSuggestions[keyword];
    if (cachedSuggestion && !cachedSuggestion.error) {
      return Promise.resolve();
    }

    dispatch({
      type: ActionTypes.DEALS_SUGGEST_REQUEST,
      keyword,
    });

    alert('dealSeach');
    return suggestDeals(keyword, { lat, lng })
      .then(suggestions =>
        dispatch({
          type: ActionTypes.DEALS_SUGGEST_SUCCESS,
          keyword,
          suggestions,
        })
      )
      .catch(err => {
        dispatch({
          type: ActionTypes.DEALS_SUGGEST_FAILURE,
          error: err,
        });
      });
  };
};

/**
 * Search by deal suggestion
 * @param {object} dealSuggestion - the suggestion item for searching deals
 */
export function searchByDeal(dealSuggestion, isRecent = false) {
  return dispatch => {
    dispatch(prefillDeal(dealSuggestion, isRecent));
    return dispatch(manualSearch());
  };
}

/** Clear all recent searches */
export function clearAllRecentSearches() {
  removeRecentSearches();

  return {
    type: ActionTypes.UPDATE_RECENT_SEARCHES,
    recentSearches: [],
  };
}

export function removeRecentSearch(index) {
  const recentSearches = removeRecentSearchByIndex(index);
  return {
    type: ActionTypes.UPDATE_RECENT_SEARCHES,
    recentSearches,
  };
}

export function highlightLocationSearchInput(keyword) {
  return dispatch => {
    dispatch(updateKeyword(keyword));
    dispatch({
      type: ActionTypes.HIGHLIGHT_LOCATION_SEARCH_KEYWORD,
    });

    window.requestAnimationFrame(() => {
      document.getElementById('ls-location-search-input').select();
    });
    return Promise.resolve();
  };
}
