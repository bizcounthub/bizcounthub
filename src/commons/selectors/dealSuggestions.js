import { createSelector } from 'reselect';
import { selectApp } from './common';
import { prepareBloodhoundTag } from '../helpers/strings';
import { highlightWords } from '../helpers/fuzzy';
import {
  createLastAvailableSuggestionsSelector,
  createSuggestionsSelector,
} from '../helpers/suggestions';

export const selectDealKeyword = state => state.dealSearch.keyword;
export const selectDealSuggestions = state => state.dealSuggestions;
export const selectRecentSearches = state => state.recentSearches;
export const selectKeywordForSuggestions = state =>
  state.dealSearch.keywordForSuggestions;

// format recent searches data, add bhc
function formatRecentSearches(searches, app) {
  const maxCount = app.mobile ? 5 : 10; // only display 5 items for mobile
  return searches.slice(0, maxCount).map(item => ({
    ...item,
    raw: item,
    bhc: `recentSearches:${prepareBloodhoundTag(
      `${item.value}${item.subValue ? `:${item.subValue}` : ''}`
    )}`,
  }));
}

// format suggestions items
// add bhc, convert html to preact
function formatSuggestions(suggestions, keyword) {
  return suggestions.map((item, i) => ({
    ...item,
    raw: item,
    formatted: highlightWords(item.value, keyword),
    bhc: `result-${i}:${prepareBloodhoundTag(
      `${item.value}${item.subValue ? `:${item.subValue}` : ''}`
    )}`,
  }));
}

/** select and format recentSearches */
export const recentSearchesSelector = createSelector(
  selectApp,
  selectRecentSearches,
  (app, searches) => formatRecentSearches(searches, app)
);

// get last available deal suggestions
// for example: check "ki" and "k" when you type "kids"
export const lastAvailableDealSuggestionsSelector = createLastAvailableSuggestionsSelector(
  selectDealKeyword,
  selectDealSuggestions
);

/** select suggestions by keyword  */
export const dealSuggestionsSelector = createSuggestionsSelector(
  selectKeywordForSuggestions,
  selectDealSuggestions,
  lastAvailableDealSuggestionsSelector
);

/** select and format suggestions by keyword */
export const formattedSuggestionsSelector = createSelector(
  dealSuggestionsSelector,
  ({ suggestions, keyword }) => formatSuggestions(suggestions, keyword)
);
