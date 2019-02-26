import { createSelector } from 'reselect';
import { selectApp } from './common';
import { prepareBloodhoundTag } from '../helpers/strings';
import {
  highlightAddress,
  highlightWords,
} from '../helpers/locationSuggestions';
import {
  createLastAvailableSuggestionsSelector,
  createSuggestionsSelector,
} from '../helpers/suggestions';

export const selectLocationKeyword = state => state.locationSearch.keyword;
export const selectLocationSuggestions = state => state.locationSuggestions;
export const selectRecentLocations = state => state.recentLocations;
export const selectSearchError = state => state.search.error;
export const selectKeywordForSuggestions = state =>
  state.locationSearch.keywordForSuggestions;

// format recent locations data
// add bhc
function formatRecentLocations(locations) {
  return locations.map(item => ({
    ...item,
    formatted: highlightAddress(item.address, ''),
    bhc: `recentLocations:${prepareBloodhoundTag(item.address)}`,
    raw: {
      ...item,
      type: 'recent',
    },
  }));
}

// format the suggestion item
function formatSuggestion(item, keyword) {
  if (item.type === 'location') {
    return highlightWords(item.address, keyword);
  }
  return highlightAddress(item.address, keyword);
}

// format suggestions items
// add bhc, convert html to preact
function formatSuggestions(suggestions, keyword) {
  return suggestions.map((item, i) => ({
    ...item,
    formatted: formatSuggestion(item, keyword),
    bhc: `result-${i}:${prepareBloodhoundTag(item.address)}`,
    raw: item,
  }));
}

/** Select recent locations */
export const recentLocationsSelector = createSelector(
  selectApp,
  selectRecentLocations,
  (app, locations) => {
    const max = 5; // only 5 items for both desktop and mobile
    return formatRecentLocations(locations.slice(0, max));
  }
);

// get last available location suggestions
// for example: check "ch" and "c" when you type "chi"
export const lastAvailableLocationSuggestionsSelector = createLastAvailableSuggestionsSelector(
  selectLocationKeyword,
  selectLocationSuggestions
);

/** select suggestions by keyword  */
export const locationSuggestionsSelector = createSuggestionsSelector(
  selectKeywordForSuggestions,
  selectLocationSuggestions,
  lastAvailableLocationSuggestionsSelector
);

/** select and format suggestions by keyword */
export const formattedSuggestionsSelector = createSelector(
  locationSuggestionsSelector,
  ({ suggestions, keyword }) => formatSuggestions(suggestions, keyword)
);
