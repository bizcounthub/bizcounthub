import {
  saveRecentLocation,
  saveRecentSearch,
} from 'app/common/helpers/search';

export default function subscribe(state /* , prevState */) {
  // if we submitted the search
  const { search, location, dealSearch } = state;
  const { redirectUrl } = search;
  const { dealSuggestion } = dealSearch;
  if (redirectUrl) {
    saveRecentLocation(location);
    saveRecentSearch(dealSuggestion);
    // redirect to search page
    window.location.href = redirectUrl;
  }
}
