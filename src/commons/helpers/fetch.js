import { locale, country, csrfToken } from './head-data';
import { paramsToQueryString } from './url';

// Fetches an API response
// This makes every API response have the same shape, regardless of how nested it was.
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
export function fetch(endpoint, fetchOption = {}) {
  const fullUrl = endpoint;
  const isTouch = document.body.classList.contains('is-mobile');
  let latLng;
  const { lat, lng } = window.Groupon.division || {};

  if (lat && lng) {
    latLng = `${lat},${lng}`;
  }

  const option = {
    timeout: 5000,
    //credentials: 'include',
    mode: 'cors',
    format: 'json',
    ...fetchOption,
    headers: {
      //'x-ls-locale': locale,
      'Content-Type': 'application/json',
      // 'x-ls-touch': isTouch,
      //'x-country': country,
      //'x-lat-lng': latLng,
      'Access-Control-Allow-Credentials': true,
      ...fetchOption.headers,
    },
  };

  return window
    .fetch(fullUrl, option)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      if (option.format === 'json') {
        return res.json();
      }
      return res.text();
    })
    .then(response => {
      console(response);
      if (typeof response === 'string') {
        return response;
      }
      // most of json data are wrapped by a data object
      if (response.data || response.err) {
        const { data, err } = response;
        if (err) {
          console.log(response);
          return Promise.reject(err);
        }
        return data;
      }
      return response;
    });
}

/**
 * Using 'GET' method to fetch API
 * @param {string} endpoint - Url
 * @param {Object=} params - query string
 * @param {Object=} option - option
 */
export function get(endpoint, params = {}, option = {}) {
  const c = endpoint.indexOf('?') > -1 ? '&' : '?';
  const url = `${endpoint}${c}${paramsToQueryString(params)}`;
  return fetch(url, option);
}

/**
 * Post data to the API
 * @param {string} endpoint - url
 * @param {Object=} data - Post data
 * @param {Object=} option - fetch option
 */
export function post(endpoint, data = {}, option = {}) {
  if (!data._csrf) {
    data._csrf = csrfToken;
  }
  const fetchOption = Object.assign({}, option, {
    method: 'POST',
    body: JSON.stringify(data), // must match 'Content-Type' header
  });
  return fetch(endpoint, fetchOption);
}

export function postForm(endpoint, data = {}, option = {}) {
  if (!data._csrf) {
    data._csrf = csrfToken;
  }
  const formBody = Object.keys(data)
    .reduce((acc, name) => {
      if (data[name] !== undefined && data[name] !== null) {
        acc.push(
          `${encodeURIComponent(name)}=${encodeURIComponent(data[name])}`
        );
      }
      return acc;
    }, [])
    .join('&');

  const fetchOption = Object.assign({}, option, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: formBody, // must match 'Content-Type' header
  });
  return fetch(endpoint, fetchOption);
}
