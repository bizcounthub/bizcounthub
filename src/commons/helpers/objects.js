/**
 * Checks if value is null or undefined.
 * @param {Object} obj - the target object
 * @param {[argument]} args - all the properties path
 * @returns {Bool}
 */
export function isNil(obj, ...args) {
  if (typeof obj === 'undefined') {
    return false;
  }

  for (let i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
}
