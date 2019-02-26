export const lang = document.head.getAttribute('data-lang') || 'en';
export const locale = document.head.getAttribute('data-locale') || 'en_US';
export const domain = document.head.getAttribute('data-domain');
export const country = document.head.getAttribute('data-country') || 'US';
export const categoryId = document.head.getAttribute('data-categoryid') || null;
const csrfMeta = document.head.querySelector('meta[name=csrf-token]');
export const csrfToken = csrfMeta ? csrfMeta.content : null;
