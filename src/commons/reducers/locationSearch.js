import * as ActionTypes from '../contants/action-types';

export const INITIAL_STATE = {
  keyword: '',
  keywordForSuggestions: '',
  locationSuggestion: null,
  highlightLocation: false,
};

function prefillLocation(state, action) {
  const { locationSuggestion, isRecent } = action;
  const { address } = locationSuggestion || {};
  const keyword = address || '';
  const keywordForSuggestions = isRecent ? '' : state.keyword;
  return {
    ...state,
    keywordForSuggestions,
    keyword,
    locationSuggestion,
  };
}

function locationSearchReducer(state = INITIAL_STATE, action) {
  const { type, keyword } = action;
  switch (type) {
    case ActionTypes.UPDATE_LOCATION_SEARCH_KEYWORD:
      return {
        ...state,
        keyword,
        keywordForSuggestions: keyword,
        locationSuggestion: null,
        highlightLocation: false,
      };
    case ActionTypes.REST_SEARCH_KEYWORDS:
      return {
        ...state,
        keyword: '',
        keywordForSuggestions: '',
        locationSuggestion: null,
        highlightLocation: false,
      };
    case ActionTypes.SEARCH_PREFILL_LOCATION:
      return prefillLocation(state, action);
    case ActionTypes.HIGHLIGHT_LOCATION_SEARCH_KEYWORD:
      return {
        ...state,
        highlightLocation: true,
      };
    default:
      return state;
  }
}

export default locationSearchReducer;
