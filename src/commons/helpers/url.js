/**
 * Decode uri
 * Replace + to ' '
 * @param {String} val
 * @returns decoded value
 */
export function decodeUrl(val) {
  if (!val) {
    return val;
  }
  return decodeURIComponent(val).replace(/\+/g, ' ');
}

/**
 * Get query string from window.location
 * @param {String} key
 */
export function getQueryStringValue(key) {
  const encodedKey = encodeURIComponent(key).replace(/[.+*]/g, '\\$&');
  const reg = new RegExp(`^(?:.*[&\\?]${encodedKey}(?:\\=([^&]*))?)?.*$`, 'i');

  return decodeUrl(window.location.search.replace(reg, '$1'));
}

/**
 * Encode the url param
 * @param {string} param - url param
 * @returns {string} - encoded url
 */
function encodeParam(param) {
  return encodeURIComponent(param).replace(/\s|%20/g, '+');
}

/**Convert params object to query string */
export function paramsToQueryString(params) {
  return Object.keys(params)
    .reduce((acc, name) => {
      if (params[name] !== undefined && params[name] !== null) {
        acc.push(`${encodeParam(name)}=${encodeParam(params[name])}`);
      }
      return acc;
    }, [])
    .join('&');
}

export function getCurrentUrlWithoutHash() {
  const { origin, pathname, search } = window.location;

  return `${origin}${pathname}${search}`;
}

export function appendParam(url, name, value) {
  return `${url}${url.includes('?') ? '&' : '?'}${encodeParam(
    name
  )}=${encodeParam(value)}`;
}

export function appendReturnTo(url) {
  return appendParam(url, 'return_to', getCurrentUrlWithoutHash());
}

export function makeUrl(path, params) {
  if (!params || !Object.keys(params).length) {
    return path;
  }
  const queryString = paramsToQueryString(params);
  if (!queryString) {
    return path;
  }
  return `${path}${path.includes('?') ? '&' : '?'}${queryString}`;
}
