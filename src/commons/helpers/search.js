import { post } from './fetch';
import { loadItem, saveItem, safeRemoveItem } from './storage';
import {
  RECENT_SEARCHES_STORAGE,
  RECENT_LOCATIONS_STORAGE,
} from '../contants/storage-keys';

/**
 * Load recent searchs data from local storage
 * Return an array
 */
export function getRecentSearches() {
  return loadItem(RECENT_SEARCHES_STORAGE, []);
}

/**
 * Load recent locations from local storage
 */
export function getRecentLocations() {
  return loadItem(RECENT_LOCATIONS_STORAGE, []);
}

/**
 * Save recent location
 * @param {Object} location
 */
export function saveRecentLocation(location) {
  if (location.currentLocation || !location.address) {
    return;
  }

  const { address } = location;
  const locations = getRecentLocations();
  const newLocations = locations
    .filter(loc => loc.address !== address)
    .slice(0, 9); // max is 10
  newLocations.unshift(location);
  saveItem(RECENT_LOCATIONS_STORAGE, newLocations);
}

/**
 * Delete a recent locations item by index
 * @param {Number} index - the index of item which you want to delete
 * @returns {Array<Object>} locations
 */
export function removeRecentLocationByIndex(index) {
  const locations = getRecentLocations();
  locations.splice(index, 1);
  saveItem(RECENT_LOCATIONS_STORAGE, locations);
  return locations;
}

/** Remove recent locations from local storage */
export function removeRecentLocations() {
  safeRemoveItem(RECENT_LOCATIONS_STORAGE);
}

/**
 * Save recent search query
 * @param {Object} deal - deal suggustion item
 */
export function saveRecentSearch(deal) {
  if (!deal || !deal.value) {
    return;
  }
  const searches = getRecentSearches();
  const newSearches = searches
    .filter(i => i.value !== deal.value || i.subValue !== deal.subValue)
    .slice(0, 9); // max is 10
  newSearches.unshift(deal);
  saveItem(RECENT_SEARCHES_STORAGE, newSearches);
}

/**
 * Delete a recent searches item by index
 * @param {Number} index - the index of item which you want to delete
 * @returns {Array<Object>} searches
 */
export function removeRecentSearchByIndex(index) {
  const searches = getRecentSearches();
  searches.splice(index, 1);
  saveItem(RECENT_SEARCHES_STORAGE, searches);
  return searches;
}

/** Remove recent searches from local storage */
export function removeRecentSearches() {
  safeRemoveItem(RECENT_SEARCHES_STORAGE);
}

/**
 * Post search data to set cookie and redirect url
 *
 * @param payload
 * @returns {*}
 */
export function postSearchData(payload) {
  const url = '/layout/api/v2/search';
  return post(url, payload).then(result => {
    alert('jol ah pseng');
    if (result && result.error) {
      throw result;
    }
    return result;
  });
}
