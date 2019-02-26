import {
  INITIALIZE,
  PRIMARY_TAB_ACTIVE,
  PRIMARY_TAB_DEACTIVE,
  PRIMARY_TABS_UPDATE_RECT,
  SUBNAV_UPDATE_CARDS,
  SUBNAV_INIT,
} from '../../commons/contants/action-types';
import { transformFlyouts } from '../helpers/flyout';

export const INITIAL_STATE = {
  activeTab: null,
  primary: [],
  flyouts: {},
  cards: {},
};

const initNavbar = (state, action) => {
  const { navbar } = action.payload || {};
  const { primary, flyouts, couponsSubnavLinks } = navbar || {};
  if (!Array.isArray(primary) || !flyouts) {
    return state;
  }

  return {
    ...state,
    primary,
    flyouts: transformFlyouts(flyouts, couponsSubnavLinks),
    couponsSubnavLinks,
  };
};

const updatePrimaryTabsRect = (state, action) => {
  const { rects } = action;
  return {
    ...state,
    primary: state.primary.map((tab, i) => {
      const rect = rects[i];
      let item = tab;
      if (rect && rect.id === tab.key) {
        item = Object.assign({}, item, rect);
      }
      return item;
    }),
  };
};

function primaryNavReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INITIALIZE:
      return initNavbar(state, action);
    case PRIMARY_TAB_ACTIVE:
      return {
        ...state,
        activeTab: action.tab,
      };
    case PRIMARY_TAB_DEACTIVE:
      return {
        ...state,
        activeTab: null,
      };
    case PRIMARY_TABS_UPDATE_RECT:
      return updatePrimaryTabsRect(state, action);
    case SUBNAV_UPDATE_CARDS:
      return {
        ...state,
        cards: action.cards,
      };
    case SUBNAV_INIT:
      const { flyouts, cards } = action || {};
      const { couponsSubnavLinks } = state;
      return {
        ...state,
        flyouts: transformFlyouts(flyouts, couponsSubnavLinks),
        cards,
      };
    default:
      return state;
  }
}

export default primaryNavReducer;
