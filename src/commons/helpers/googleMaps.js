import { country, lang } from './head-data';
import { loadScript } from './page';
import { paramsToQueryString } from './url';
import { formatAddress, fixLatOrLng } from './location';
import { isNil } from './objects';

const G_MAP_TYPES = [
  'country',
  'street_address',
  'intersection',
  'political',
  'administrative_area_level_1',
  'administrative_area_level_2',
  'administrative_area_level_3',
  'administrative_area_level_4',
  'administrative_area_level_5',
  'colloquial_area',
  'locality',
  'ward',
  'sublocality',
  'sublocality_level_1',
  'neighborhood',
  'premise',
  'subpremise',
  'natural_feature',
  'airport',
  'park',
  'point_of_interest',
  'subpremise',
  'postal_code',
];

/** Load google map API js */
export function load() {
  // Check if window.google.maps.Geocoder exists
  if (isNil(window, 'google', 'maps', 'Geocoder')) {
    return Promise.resolve(new window.google.maps.Geocoder());
  }

  const params = {
    v: 3,
    channel: 'layout-service',
    region: country,
    language: lang,
    libraries: 'geometry', // Check the Google Maps docs for details on libraries available.
  };
  const host = `mapproxy${country === 'US' ? '' : '-eu'}.groupon.com`;
  const url = `//${host}/maps/api/js?${paramsToQueryString(params)}`;

  return loadScript(url, 'ls-google-map-script').then(() => {
    if (!isNil(window, 'google', 'maps', 'Geocoder')) {
      throw new Error('Failed to load google maps API.');
    }
    return new window.google.maps.Geocoder();
  });
}

/**
 * Filter the results by country
 * @param {Object} item - item of the results from Google Map API
 * @returns {Bool} - if the item matches the country
 */
function filterByCountry(item) {
  const { address_components } = item || {};
  return (
    Array.isArray(address_components) &&
    address_components.some(component => {
      const { short_name } = component || {};
      if (!short_name) {
        return false;
      }

      if (country === 'US') {
        return short_name === 'US' || short_name === 'CA';
      }

      return short_name === country;
    })
  );
}

/**
 * Transform the google result to LS location format
 * @param {Object} result - result got from Google Map API
 */
function transformResult(result) {
  const { address_components = [], formatted_address } = result || {};
  const components = address_components.reduce((acc, item) => {
    const { types = [] } = item;
    types.forEach(type => {
      acc[type] = item;
    });
    return acc;
  }, {});
  const getComponent = (type, prop = 'short_name') =>
    (components[type] || {})[prop];

  const city = getComponent('locality', 'long_name');
  const state = getComponent('administrative_area_level_1');
  const sublocality = getComponent('sublocality_level_1');
  const postal_code = getComponent('postal_code');
  const neighborhood = getComponent('neighborhood');
  const fullAddress =
    country === 'JP'
      ? sublocality || city || state || formatted_address
      : formatted_address;

  const friendlyName = formatAddress(fullAddress);
  const lat = fixLatOrLng(result.geometry.location.lat());
  const lng = fixLatOrLng(result.geometry.location.lng());

  return {
    address: friendlyName,
    lat,
    lng,
    city,
    state,
    postal_code,
    neighborhood,
    type: 'location',
  };
}

/**
 * Find the first valid result
 * @param {Array} results - results returned from Google Map API
 * @returns {Object?} - The first valid item
 */
function findValidResult(results) {
  return results.filter(filterByCountry).find(item => {
    const { types } = item;
    return (
      Array.isArray(types) && types.some(type => G_MAP_TYPES.includes(type))
    );
  });
}

/**
 * Get the address information from a keyword by Google Map API
 * @param {string} address - address typed by user
 * @returns {Promise} - search result
 */
export function geocode(address) {
  return load().then(
    geocoder =>
      new Promise((resolve, reject) => {
        geocoder.geocode({ address }, (results, status) => {
          if (status !== 'OK') {
            reject({ address, status });
            return;
          }
          const result = findValidResult(results);
          if (!result) {
            reject({ address, status: 'ZERO_RESULTS' });
            return;
          }
          resolve(transformResult(result));
        });
      })
  );
}
