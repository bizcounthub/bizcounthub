import {
  PRIMARY_TAB_ACTIVE,
  PRIMARY_TAB_DEACTIVE,
  PRIMARY_TABS_UPDATE_RECT,
  SUBNAV_UPDATE_CARDS,
  SUBNAV_INIT,
} from 'app/common/constants/action-types';
import { loadCards } from 'app/desktop/helpers/cards';
import { loadSubnavData } from 'app/desktop/helpers/subnav';

let hideFlyouts = null;

export function updateTabsBound() {
  const tabs = Array.from(
    document.querySelectorAll('.primary-nav .primary-nav-tab a')
  );
  const rects = tabs.map(tab => {
    const { x, y, left, top, width, height } = tab.getBoundingClientRect();
    const id = tab.dataset.id;
    return { id, x: x || left, y: y || top, width, height };
  });

  return {
    type: PRIMARY_TABS_UPDATE_RECT,
    rects,
  };
}

export function activatePrimaryTab(tab) {
  if (hideFlyouts) {
    window.clearTimeout(hideFlyouts);
  }

  return (dispatch, getState) => {
    const { navbar } = getState();
    if (navbar.activeTab === tab) {
      return;
    }

    dispatch({ type: PRIMARY_TAB_ACTIVE, tab });
  };
}

export function deactivatePrimaryTab(delay = true) {
  return (dispatch, getState) => {
    const { navbar } = getState();
    if (!navbar.activeTab) {
      return;
    }

    if (hideFlyouts) {
      window.clearTimeout(hideFlyouts);
    }

    hideFlyouts = window.setTimeout(
      () => {
        dispatch({ type: PRIMARY_TAB_DEACTIVE });
      },
      delay ? 250 : 0
    );
  };
}

export function loadNavbarCards() {
  return (dispatch, getState) => {
    const { location, flags } = getState();
    if (flags.showLiteHeader) {
      return;
    }

    loadCards(location)
      .then(cards => {
        dispatch({
          type: SUBNAV_UPDATE_CARDS,
          cards,
        });
      })
      .catch(() => {});
  };
}

export function loadSubnav() {
  return (dispatch, getState) => {
    const { flags, location, flyouts, cards } = getState();
    if (
      flags.showLiteHeader ||
      (flyouts &&
        Object.keys(flyouts).length &&
        Array.isArray(cards) &&
        cards.length)
    ) {
      return;
    }

    loadSubnavData(location)
      .then(({ flyouts, cards }) => { // eslint-disable-line
        dispatch({
          type: SUBNAV_INIT,
          flyouts,
          cards,
        });
      })
      .catch(() => {});
  };
}
