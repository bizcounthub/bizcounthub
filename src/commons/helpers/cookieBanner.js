import placeholders from './linkPlaceholders';

/**
 * Get the full text string for the bottom cookie banner
 * @param {Object} t - translations object
 */
export function getFullText(t) {
  const text = t.cookieBanner.fullText || '';
  return placeholders
    .load(text)
    .addPlaceholder('%cookie_link_open%', '%cookie_link_close%', {
      className: 'bottom-gdpr-link',
      url: '/legal/cookie-consent',
      bhw: 'gdprBottomManageLink',
    })
    .render();
}

/**
 * Get the partial text string for the bottom cookie banner
 * @param {Object} t - translations object
 */
export function getPartialText(t, readMoreClickHandler) {
  const partialText = t.cookieBanner.partialText || '';
  return placeholders
    .load(partialText)
    .addPlaceholder('%read_more_link_open%', '%read_more_link_close%', {
      className: 'bottom-gdpr-link',
      onClick: readMoreClickHandler,
      bhw: 'gdprBottomReadMoreLink',
    })
    .render();
}

/**
 * Get the Manage Cookies line of text for the bottom cookie banner
 * @param {Object} t - translations object
 */
export function getManageText(t) {
  const manageText = t.cookieBanner.manageText || '';
  return placeholders
    .load(manageText)
    .addPlaceholder('%cookie_link_open%', '%cookie_link_close%', {
      className: 'bottom-gdpr-link',
      url: '/legal/cookie-consent',
      bhw: 'gdprBottomManageLink',
    })
    .render();
}
