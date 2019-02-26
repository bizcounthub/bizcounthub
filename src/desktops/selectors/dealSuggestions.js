import { createSelector } from 'reselect';
import {
  selectApp,
  selectT,
  selectFlags,
  selectSearch,
} from '../../commons/selectors/common';
import {
  formattedSuggestionsSelector,
  recentSearchesSelector,
  selectDealKeyword,
} from '../../commons/selectors/dealSuggestions';

/**
 * Select data for deal search
 */
export const suggestionsSelector = createSelector(
  selectApp,
  selectT,
  selectFlags,
  selectDealKeyword,
  formattedSuggestionsSelector,
  recentSearchesSelector,
  selectSearch,
  (app, t, flags, keyword, suggestions, recentSearches, search) => ({
    app,
    t,
    flags,
    keyword,
    suggestions,
    recentSearches,
    search,
  })
);
