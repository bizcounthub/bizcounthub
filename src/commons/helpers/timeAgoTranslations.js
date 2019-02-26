/*eslint-disable no-undef*/
__webpack_public_path__ = window.remoteUrl;

/**
 * Fetch translations for data-fns distance_in_words function
 *
 * @param {string} lang
 * @return {Promise<*>|*|{default: {}}}
 */
function importTranslations(lang) {
  let translation;
  switch (lang) {
    case 'it':
      translation = import(/* webpackChunkName: "timeago_it_translations" */ './timeAgoLocales/it');
      break;
    case 'de':
      translation = import(/* webpackChunkName: "timeago_de_translations" */ './timeAgoLocales/de');
      break;
    case 'fr':
      translation = import(/* webpackChunkName: "timeago_fr_translations" */ './timeAgoLocales/fr');
      break;
    case 'ja':
      translation = import(/* webpackChunkName: "timeago_ja_translations" */ './timeAgoLocales/ja');
      break;
    case 'nl':
      translation = import(/* webpackChunkName: "timeago_nl_translations" */ './timeAgoLocales/nl');
      break;
    case 'pl':
      translation = import(/* webpackChunkName: "timeago_pl_translations" */ './timeAgoLocales/pl');
      break;
    case 'es':
      translation = import(/* webpackChunkName: "timeago_es_translations" */ './timeAgoLocales/es');
      break;
    default:
      translation = { default: {} }; // default to English, which is bundled with date-fns distance_in_words
  }
  return translation;
}
module.exports = importTranslations;
