const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Format tag, replace special characters with _
 * @param {String} tag
 */
export function prepareBloodhoundTag(tag = '') {
  return tag
    .split('|')
    .slice(-1)
    .join('')
    .toLowerCase();
}

/**
 * Convert a string to a rexpattern string
 * @param {String} pattern
 */
export function convertSimple2RegExpPattern(pattern) {
  return pattern
    .replace(/[-\\{}+?|^$.,[\]()#\s]/g, '\\$&')
    .replace(/[*]/g, '.*');
}

/**
 * Convert a string to a slug
 * @param {String} text
 * @returns {String}
 */
export function slugify(text = '') {
  return text
    .toString()
    .toLowerCase()
    .replace(/(\s+|-{1,})/g, '-') // Replace spaces with -, Replace multiple - with single -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export function isEmail(email) {
  return emailReg.test(email);
}
