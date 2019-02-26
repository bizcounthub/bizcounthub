import { loadItem } from '../helpers/storage';
import { decodeUrl } from '../helpers/url';
import { fixLatOrLng } from '../helpers/location';
import { GEOLOCATION } from '../contants/storage-keys';

import { Cookies } from 'react-cookie';
export const USER_ID = 'snickerdoodle';
export const B = 'b';
export const C = 'c';
export const SEARCH_LOC = 'search_loc';
export const DIVISION = 'division';
export const ELL = 'ell';
export const CLL = 'cll';
export const DECADE = 10 * 365 * 24 * 60 * 60 * 1000; // 10 years

// get user id from cookie
export function getUserId() {
  return window.Cookie.get(USER_ID);
}

// get b cookie
export function getB() {
  return window.Cookie.get(B);
}

// get c cookie
export function getC() {
  return window.Cookie.get(C);
}

// get ell cookie
export function getEll() {
  return window.Cookie.get(ELL);
}

// get cll cookie
export function getCll() {
  return window.Cookie.get(CLL);
}

/**
 * Set the ell cookie value
 * @param {string} ell - ell cookie value
 */
export function setEll(ell) {
  window.Cookie.set('ell', ell, { consentClass: 'essential' });
}

/**
 * save search_loc cookie and limit lat/lng to 3 decimal points
 * @param {Object} searchLoc - the parsed searchLoc cookie object
 */
export function saveSearchLoc(searchLoc) {
  if (
    !searchLoc ||
    !searchLoc.lat ||
    !searchLoc.lng ||
    !searchLoc.closestDivision
  ) {
    return;
  }
  searchLoc.lat = fixLatOrLng(searchLoc.lat);
  searchLoc.lng = fixLatOrLng(searchLoc.lng);
  const searchLocString = encodeURIComponent(JSON.stringify(searchLoc));
  window.Cookie.set(SEARCH_LOC, searchLocString, {
    consentClass: 'essential',
    maxAge: DECADE,
  });
}

/**
 * Get "search_loc" cookie data
 * @returns {Object} - search_loc - Search_loc data
 */
export function getSearchLoc() {
  const payload = window.Cookie.get(SEARCH_LOC);
  let state = null;
  if (payload) {
    try {
      state = JSON.parse(decodeURIComponent(payload));
    } catch (e) { } // eslint-disable-line
  }

  if (!state) {
    return {};
  }

  const { current_location } = loadItem(GEOLOCATION, {});
  // we don't need friendlyName, just in case
  state.fullAddress = decodeUrl(state.fullAddress || state.friendlyName);
  // if we have local storage for current_location, use it then delete it.
  state.currentLocation = state.currentLocation || current_location;
  state.lat = fixLatOrLng(state.lat);
  state.lng = fixLatOrLng(state.lng);

  return state;
}

// get consumer id from cookie
// snickerdoodle first, then c cookie
export function getConsumerId() {
  return getUserId() || window.Cookie.get(C);
}

/**
 * Get lat & lng from search_loc cookie
 * Set it to ell
 */
export function setELLFromSearchLoc() {
  const { lat, lng } = getSearchLoc();
  if (!lat || !lng) {
    return;
  }
  if (lat && lng) {
    setEll(`${lat},${lng}`);
  }
}
