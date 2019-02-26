import { updateCurrentLocation } from '../actions/locationSearch';
import { trackEvent } from '../helpers/track';
import { loadItem } from '../helpers/storage';

import { getSearchLoc, getEll, getCll } from '../helpers/cookie';

/**
 * Init cll timer
 */
export function initCllTimer() {
  const cll = getCll();
  const ell = getEll();
  const searchLoc = getSearchLoc() || {};

  return dispatch => {
    const { currentLocation, closestDivision } = searchLoc;
    if (!currentLocation || !cll) {
      return;
    }

    trackEvent('sls-current-location-cookies', {
      ell,
      cll,
      divisioins: closestDivision,
      in_sync: cll === ell,
    });

    const currentTime = Date.now();
    const TTL = loadItem('cll_TTL', currentTime);

    const timeout = currentTime >= TTL ? 0 : TTL - currentTime;
    setTimeout(() => {
      dispatch(updateCurrentLocation());
    }, timeout);
  };
}
