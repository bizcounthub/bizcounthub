/*eslint-disable no-undef*/
__webpack_public_path__ = window.remoteUrl;

import importTranslations from 'app/common/helpers/timeAgoTranslations';

const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = 1000 * 60;
const HOUR_IN_MS = 1000 * 60 * 60;
const DAY_IN_MS = 1000 * 60 * 60 * 24;
const MONTH_IN_MS = 1000 * 60 * 60 * 24 * 30;
const YEAR_IN_MS = 1000 * 60 * 60 * 24 * 30 * 12;

export function getRtfTime(rtf, time) {
  time = Date.now() - time;
  let unit;
  let divider = 1;
  if (time < MINUTE_IN_MS) {
    unit = 'second';
    divider = SECOND_IN_MS;
  } else if (time < HOUR_IN_MS) {
    unit = 'minute';
    divider = MINUTE_IN_MS;
  } else if (time < DAY_IN_MS) {
    unit = 'hour';
    divider = HOUR_IN_MS;
  } else if (time < MONTH_IN_MS) {
    unit = 'day';
    divider = DAY_IN_MS;
  } else if (time < YEAR_IN_MS) {
    unit = 'month';
    divider = MONTH_IN_MS;
  } else {
    unit = 'year';
    divider = YEAR_IN_MS;
  }

  return rtf.format(-1 * Math.floor(time / divider), unit);
}

/**
 * Get localized relative time
 *
 * @param {time} time
 * @param {Object} config
 * @return {string|undefined} localizedTimeAgo
 */
export function getRelativeTime(time, config = {}) {
  let localizedTimeAgo;
  const { hasRtf, rtf, distanceInWords, timeAgoTranslations } = config;
  if (time && (rtf || distanceInWords)) {
    localizedTimeAgo = hasRtf
      ? getRtfTime(rtf, time)
      : distanceInWords(new Date(), time, {
          locale: timeAgoTranslations,
          addSuffix: true,
        });
  }

  return localizedTimeAgo;
}

/**
 *
 * @param {string} lang
 * @return {Promise<any> | Promise}
 */
export function getTimeAgo(lang) {
  const config = {
    hasRtf: false,
  };

  config.hasRtf = window.Intl && window.Intl.RelativeTimeFormat;

  // if native support for Intl.RelativeTimeFormat
  if (config.hasRtf) {
    config.rtf = new window.Intl.RelativeTimeFormat(lang, { numeric: 'auto' });
    return Promise.resolve(config);
  }

  // else load library
  return Promise.all([
    import(/* webpackChunkName: "date-fns-distance" */ 'date-fns/distance_in_words_strict'),
    importTranslations(lang),
  ]).then(([distanceInWordsStrictModule, timeAgoTranslationsModule]) => {
    config.distanceInWords = distanceInWordsStrictModule.default;
    config.timeAgoTranslations = timeAgoTranslationsModule.default;
    return config;
  });
}
