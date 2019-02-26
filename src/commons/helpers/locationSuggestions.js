import React from 'react';
import { get } from './fetch';
import { matchesFuzzy, highlightWords } from './fuzzy';

export { highlightWords };

/**
 * LS-3434
 * Require at least 1 alpha character to make /v2/address/autocomplete request
 * @param {string} keyword - keyword
 * @param {string} country - country information
 * @returns {boolean} result
 */
const checkIfSendQuery = (keyword, country) => {
  // only limit 2 chars for JP LS-4953
  const digit = country === 'JP' ? 2 : 3;
  return keyword && keyword.length >= digit;
};

export function suggestLocations(keyword, location, country) {
  const url = '/layout/api/v2/autocomplete/locations';
  const { lat, lng } = location;
  if (!checkIfSendQuery(keyword, country)) {
    return Promise.resolve([]);
  }
  const params = {
    input: keyword,
    lat,
    lng,
  };

  return get(url, params).then(result => {
    return result && Array.isArray(result.items) ? result.items : [];
  });
}

/**
 * Highlight the matches with <strong> tag
 * @param {string} address
 * @param {string} keyword
 * @return {Array<HTMLElement>} highlightedResult
 */
export function highlightAddress(address, keyword) {
  let highlightRanges = matchesFuzzy(keyword, address);
  if (highlightRanges === null || !highlightRanges.length) {
    highlightRanges = [{ start: 0, end: 0 }];
  }

  const highlightedResult = [];
  let pos = 0;
  let noEM = true; // no <em> for the first part of the addess

  function pushContentWithStrong(text, strong) {
    highlightedResult.push(strong ? <strong>{text}</strong> : text);
  }

  function pushContent(text, strong) {
    if (noEM) {
      const commaPos = text.indexOf(',');
      if (commaPos > -1) {
        // found the first comma
        pushContentWithStrong(text.substring(0, commaPos), strong);
        const restContent = text.substring(commaPos + 1);
        if (restContent) {
          pushContentWithStrong(<em>{restContent}</em>, strong);
        }
        noEM = false; // <em> the reset
      } else {
        // no comma
        pushContentWithStrong(text, strong);
      }
    } else {
      pushContentWithStrong(<em>{text}</em>, strong);
    }
  }

  highlightRanges.forEach(range => {
    const head = address.substring(pos, range.start); // head
    if (head) {
      pushContent(head);
    }

    pushContent(address.substring(range.start, range.end), true); // wrap with strong tag

    pos = range.end;
  });

  if (pos < address.length) {
    pushContent(address.substring(pos)); // tail
  }

  return highlightedResult;
}
