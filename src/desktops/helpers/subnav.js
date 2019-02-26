import { saveSubItem, loadSubItem } from 'app/common/helpers/storage';
import { get } from 'app/common/helpers/fetch';
import { SUBNAV_STORAGE } from 'app/common/constants/storage-keys';
import { CACHE_DURATION_DAY } from 'app/common/constants/caching';
import { transformCards } from './cards';

/** Fetch subnav from server */
function fetchSubnav(division) {
  const url = `/layout/api/v2/subnav`;

  // load from server
  return get(url).then(({ flyouts, cards }) => {
    const noFlyouts = !flyouts || !Object.keys(flyouts).length;
    const noCards = !Array.isArray(cards);
    const transformedCards = transformCards(cards);

    if (noFlyouts) flyouts = {}; // just return an empty object
    if (noCards) cards = []; // just return an empty array

    if (noFlyouts || noCards) {
      // return and do not cache
      return {
        flyouts,
        cards: transformedCards,
      };
    }

    // save to local storage
    saveSubItem(
      SUBNAV_STORAGE,
      division,
      { flyouts, cards },
      CACHE_DURATION_DAY
    );

    return { flyouts, cards: transformedCards };
  });
}

/**
 * Load subnav flyouts and cards from localstorage or server
 * @param {Object} app - app from reducer
 * @param {Object} location - location from reducer
 */
export function loadSubnavData(location) {
  const { division } = location;

  // load local storage first
  const cachedData = loadSubItem(SUBNAV_STORAGE, division);

  // if we got data from local storage, just return it
  if (cachedData) {
    return Promise.resolve({
      flyouts: cachedData.flyouts,
      cards: transformCards(cachedData.cards),
    });
  }

  // fetch data from server
  return fetchSubnav(division);
}
