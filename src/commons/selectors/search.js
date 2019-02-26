import { createSelector } from 'reselect';

import {
  selectApp,
  selectT,
  selectFlags,
  selectLocation,
  selectDealSearch,
  selectLocationSearch,
} from './common';
import {
  selectSearchError,
  selectLocationKeyword,
} from './locationSuggestions';
import { selectDealKeyword } from './dealSuggestions';

export const selectSearch = state => state.search;

export const searchSelector = createSelector(
  selectApp,
  selectT,
  selectFlags,
  selectLocation,
  selectSearch,
  selectSearchError,
  selectLocationKeyword,
  selectDealKeyword,
  selectDealSearch,
  selectLocationSearch,
  (
    app,
    t,
    flags,
    location,
    search,
    locationErrorStatus,
    locationKeyword,
    dealKeyword,
    dealSearch,
    locationSearch
  ) => ({
    app,
    t,
    flags,
    location,
    search,
    locationErrorStatus,
    locationKeyword,
    dealKeyword,
    dealSearch,
    locationSearch,
  })
);
