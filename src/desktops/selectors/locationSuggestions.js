import { createSelector } from 'reselect';
import { getCll } from '../../commons/helpers/cookie';
import {
  selectApp,
  selectT,
  selectFlags,
  selectSearch,
} from '../../commons/selectors/common';
import {
  formattedSuggestionsSelector,
  recentLocationsSelector,
  selectSearchError,
  selectLocationKeyword,
} from '../../commons/selectors/locationSuggestions';

/**
 * Select data for location search
 */
export const suggestionsSelector = createSelector(
  selectApp,
  selectT,
  selectFlags,
  selectLocationKeyword,
  formattedSuggestionsSelector,
  recentLocationsSelector,
  selectSearchError,
  selectSearch,
  (
    app,
    t,
    flags,
    keyword,
    suggestions,
    recentLocations,
    errorStatus,
    search
  ) => ({
    app,
    t,
    flags,
    keyword,
    suggestions,
    recentLocations,
    errorStatus,
    search,
    showLocationFlyout: !getCll(),
  })
);
