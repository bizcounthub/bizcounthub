import { createSelector } from 'reselect';

export const suggestStarted = (state, action) => {
  const { keyword } = action;
  console.log('suggestStarted', action);
  if (!keyword) {
    return state;
  }

  return {
    ...state,
    [keyword]: {
      loading: true,
      error: null,
      suggestions: null,
    },
  };
};

export const suggestFailed = (state, action) => {
  const { keyword, error } = action;
  console.log('failed:', error);
  if (!keyword) {
    return state;
  }

  return {
    ...state,
    [keyword]: {
      loading: false,
      error,
      suggestions: null,
    },
  };
};

export const suggestSuccess = (state, action) => {
  const { keyword, suggestions } = action;
  console.log('suggestSuccess', suggestions);
  if (!keyword || !Array.isArray(suggestions)) {
    return state;
  }

  return {
    ...state,
    [keyword]: {
      loading: false,
      error: null,
      suggestions,
    },
  };
};

// get last available suggestions
// for example: check "ki" and "k" when you type "kids"
export const createLastAvailableSuggestionsSelector = (
  selectKeyword,
  selectSuggestionsResult
) =>
  createSelector(
    selectKeyword,
    selectSuggestionsResult,
    (keyword, suggestionsResult) => {
      let prevKeyword = keyword.slice(0, -1);
      while (prevKeyword.length) {
        const prevSuggestions = suggestionsResult[prevKeyword];
        const { suggestions } = prevSuggestions || {};
        if (suggestions) {
          return suggestions;
        }

        prevKeyword = prevKeyword.slice(0, -1);
      }
      return null;
    }
  );

/** select suggestions by keyword  */
export const createSuggestionsSelector = (
  keywordSelector,
  suggestionsResultSelector,
  lastAvailableSuggestionsSelector
) =>
  createSelector(
    keywordSelector,
    suggestionsResultSelector,
    lastAvailableSuggestionsSelector,
    (keyword, suggestionsResult, lastAvailableSuggestions) => {
      const currentResult = suggestionsResult[keyword];
      // loading
      let suggestions;
      if (!currentResult || currentResult.loading) {
        suggestions = lastAvailableSuggestions || []; // return last succeeded results
      } else {
        suggestions = currentResult.suggestions || [];
      }
      return { suggestions, keyword };
    }
  );
