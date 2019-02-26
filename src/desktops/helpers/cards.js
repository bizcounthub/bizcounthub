import { saveSubItem, loadSubItem } from 'app/common/helpers/storage';
import { get } from 'app/common/helpers/fetch';
import { CARDS_STORAGE } from 'app/common/constants/storage-keys';
import { CACHE_DURATION_DAY } from 'app/common/constants/caching';

/** Fetch cards from server */
export function fetchCards(division) {
  const url = `/layout/api/v2/cards`;

  // load from server
  return get(url).then(cards => {
    if (!Array.isArray(cards)) {
      return []; // just return an empty array
    }

    // save to local storage
    saveSubItem(CARDS_STORAGE, division, { cards }, CACHE_DURATION_DAY);

    return cards;
  });
}

/**
 * Transform cards data from API
 * @param {Array} cards - cards data from API
 */
export function transformCards(cards) {
  if (!Array.isArray(cards)) {
    return {};
  }

  return cards.reduce(
    (acc, card) =>
      Object.assign(acc, {
        [card.group]: card,
      }),
    {}
  );
}

/**
 * Load cards
 * @param {Object} app - app from reducer
 * @param {Object} location - location from reducer
 */
export function loadCardsFromLocalOrServer(location) {
  const { division } = location;

  // load local storage first
  const cachedData = loadSubItem(CARDS_STORAGE, division);

  // if we got data from local storage, just return it
  if (cachedData) {
    return Promise.resolve(cachedData.cards);
  }

  // fetch data from server
  return fetchCards(division);
}

/**
 * Load cards
 * @param {Object} location - location from reducer
 * @param {Object} flags - server side feature flags
 */
export function loadCards(location) {
  return loadCardsFromLocalOrServer(location).then(transformCards);
}

// TODO: If the LS-5032 Lazyload Subnav Experiment is rolled out,
//       then remove all functions here other than transformCards(cards)
