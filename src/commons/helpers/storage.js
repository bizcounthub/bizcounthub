/**
 * Get an item from local storage
 * @param {String} key
 *    storage key name
 * @param {Bool} deleteIfInvalid
 *    Delete the item if we can't parse it
 */
export function getItem(key, deleteIfInvalid = true) {
  try {
    const value = window.localStorage.getItem(key);
    if (value === null) {
      return null;
    }
    return JSON.parse(value);
  } catch (err) {
    if (deleteIfInvalid) {
      safeRemoveItem(key);
    }
    throw err;
  }
}

/**
 * Save an item into local storage
 * @param {String} key
 * @param {Any} item
 */
export function setItem(key, item) {
  try {
    if (item === null || item === undefined) {
      return;
    }

    window.localStorage.setItem(key, JSON.stringify(item));
  } catch (err) {
    throw err;
  }
}

/**
 * Save item without exception
 * @param {String} key
 * @param {Object} item
 */
export function saveItem(key, item) {
  try {
    setItem(key, item);
  } catch (e) {} // eslint-disable-line
}

/**
 * Get an item from local storage, won't throw an error
 * @param {String} key
 *    Storage key name
 * @param {Any} defaultValue
 *    Return a default value if there is not exists or invalid
 * @param {Bool} deleteIfInvalid
 *    Delete the item if we can't parse it
 */
export function loadItem(key, defaultValue, deleteIfInvalid = true) {
  try {
    const result = getItem(key, deleteIfInvalid);
    if (result === null) {
      return defaultValue;
    }
    return result;
  } catch (e) {
    return defaultValue;
  }
}

export function safeRemoveItem(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (e) {} // eslint-disable-line
}

// check if it's a cached object
function isCachedObject(obj) {
  return typeof obj === 'object' && obj.hasOwnProperty('_expired');
}

// remove expired items
function removeExpiredItems(map, timestamp) {
  return Object.keys(map).reduce((result, key) => {
    const obj = map[key];
    if (!isCachedObject(obj) || obj['_expired'] > timestamp) {
      result[key] = obj;
    }
    return result;
  }, {});
}

/**
 * Save an item to a storaged map
 * @param {String} key
 *    Key for local storage
 * @param {String} subKey
 *    Subkey for the storaged map
 * @param {Any} item
 * @param {Number} duration
 *    Set an expired time for this item
 *    0 means no expired
 */
export function saveSubItem(key, subKey, item, duration = 0) {
  const map = loadItem(key, {}, false);
  const timestamp = new Date().getTime();
  if (duration > 0) {
    item = {
      _expired: timestamp + duration * 1000,
      _item: item,
    };
  }
  map[subKey] = item;
  setItem(key, removeExpiredItems(map, timestamp));
}

/**
 * Load an item from a storaged map
 *   e.g. get chicago from LS_Categories
 *     LS_Categories: {
 *       chicago: {xxxx}
 *     }
 * @param {String} key
 *    Key for local storage
 * @param {String} subKey
 *    Subkey for the storaged map
 * @param {Bool} deleteIfInvalid
 */
export function loadSubItem(key, subKey, deleteIfInvalid = true) {
  const map = loadItem(key, {}, deleteIfInvalid);
  const obj = map[subKey];

  if (!obj) {
    return null; // can't find anything
  }

  // if it has expired timestamp
  if (isCachedObject(obj)) {
    const timestamp = new Date().getTime();
    if (obj['_expired'] < timestamp) {
      return null;
    }
    return obj['_item'];
  }

  return obj;
}

// remove a sub item
export function removeSubItem(key, subKey) {
  const map = loadItem(key, {});
  delete map[subKey];

  setItem(key, map);
}
