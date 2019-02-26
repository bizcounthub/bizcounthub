import React from 'react';

import { convertSimple2RegExpPattern } from './strings';

const fuzzyRegExpCache = {};

const join = (head, tail) => {
  let nTail = tail;
  if (tail.length === 0) {
    nTail = [head];
  } else if (head.end === nTail[0].start) {
    nTail[0].start = head.start;
  } else {
    nTail.unshift(head);
  }
  return nTail;
};

const matchesSubsString = (word, wordToMatchAgainst, i, j) => {
  if (i === word.length) {
    return [];
  }

  if (j === wordToMatchAgainst.length) {
    return null;
  }

  if (word[i] === wordToMatchAgainst[j]) {
    const result = matchesSubsString(word, wordToMatchAgainst, i + 1, j + 1);
    if (result) {
      return join({ start: j, end: j + 1 }, result);
    }
  }

  return matchesSubsString(word, wordToMatchAgainst, i, j + 1);
};

/**
 * Check if the word matches
 * @param {String} word
 * @param {String} wordToMatchAgainst
 */
export function matchesFuzzy(word, wordToMatchAgainst) {
  if (!word || !wordToMatchAgainst) {
    return null; // return early for invalid input
  }

  word = word.replace(/-/g, '');

  // Form RegExp for wildcard matches
  let regexp = fuzzyRegExpCache[word];
  if (!regexp) {
    regexp = new RegExp(convertSimple2RegExpPattern(word), 'i');
    fuzzyRegExpCache[word] = regexp;
  }

  // RegExp Filter
  const match = regexp.exec(wordToMatchAgainst);
  if (match) {
    return [{ start: match.index, end: match.index + match[0].length }];
  }

  // Default Filter
  return matchesSubsString(
    word.toLowerCase(),
    wordToMatchAgainst.toLowerCase(),
    0,
    0
  );
}

/**
 * Highlight the matches with <strong> tag
 * @param {string} str
 * @param {string} word
 * @return {Array<HTMLElement>} highlightedResult
 */
export function highlightWords(str, word) {
  if (!word) {
    return str;
  }

  const highlightRanges = matchesFuzzy(word, str);
  if (highlightRanges === null || !highlightRanges.length) {
    return str;
  }

  const highlightedResult = [];
  let pos = 0;
  highlightRanges.forEach(range => {
    const head = str.substring(pos, range.start); // head
    if (head) {
      highlightedResult.push(head);
    }

    highlightedResult.push(
      <strong>{str.substring(range.start, range.end)}</strong>
    ); // wrap with strong tag

    pos = range.end;
  });
  if (pos < str.length) {
    highlightedResult.push(str.substring(pos)); // tail
  }
  return highlightedResult;
}
