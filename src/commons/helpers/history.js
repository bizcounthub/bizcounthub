/**
 * Remove hash from url
 */
export function removeHash() {
  window.history.replaceState(
    '',
    document.title,
    window.location.pathname + window.location.search
  );
}

/**
 * Add hash to url without history
 * @param {string} hash - hash string
 */
export function addHash(hash) {
  window.history.replaceState('', document.title, `#${hash}`);
}

/**
 * Redirect to a new url
 * @param {string} url - the new url which you want to redirect to
 */
export function redirectTo(url) {
  window.location.href = url;
  if (url.includes('#')) {
    window.location.reload();
  }
}

/**
 * Refresh current page by redirecting to current url
 */
export function refresh() {
  redirectTo(window.location.href);
}
