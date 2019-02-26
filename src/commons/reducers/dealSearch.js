import * as ActionTypes from '../contants/action-types';

export const INITIAL_STATE = {
  query: '',
  keyword: '',
  keywordForSuggestions: '',
  dealSuggestion: null,
};

function prefillDeal(state, action) {
  const { dealSuggestion, isRecent } = action;
  const { value } = dealSuggestion || {};
  const keyword = value || '';
  const keywordForSuggestions = isRecent ? '' : state.keyword;
  return {
    ...state,
    keywordForSuggestions,
    keyword,
    dealSuggestion,
  };
}

function dealSuggestionsReducer(state = INITIAL_STATE, action) {
  const { type, keyword, payload } = action;
  switch (type) {
    case ActionTypes.INITIALIZE:
      return {
        ...state,
        query: payload.search.query,
        keyword: payload.search.query,
        keywordForSuggestions: payload.search.query,
      };
    case ActionTypes.UPDATE_DEAL_SEARCH_KEYWORD:
      return {
        ...state,
        keyword,
        keywordForSuggestions: keyword,
      };
    case ActionTypes.REST_SEARCH_KEYWORDS:
      return {
        ...state,
        keyword: state.query,
        keywordForSuggestions: state.query,
      };
    case ActionTypes.SEARCH_PREFILL_DEAL:
      return prefillDeal(state, action);
    default:
      return state;
  }
}

export default dealSuggestionsReducer;
