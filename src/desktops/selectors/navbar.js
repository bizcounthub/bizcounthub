import { createSelector } from 'reselect';
import {
  selectApp,
  selectT,
  selectFlags,
  selectUser,
  createSelectorByArray,
} from 'app/common/selectors/common';

export const selectNavbar = state => state.navbar;
export const selectPrimary = state => state.navbar.primary;
export const selectActiveTab = state => state.navbar.activeTab;
export const selectCards = state => state.navbar.cards;
export const selectFlyouts = state => state.navbar.flyouts;

export const primarySelector = createSelector(
  selectPrimary,
  selectFlyouts,
  (primary, flyouts) =>
    primary.map(item =>
      Object.assign({}, item, {
        haspopup: flyouts[item.key],
      })
    )
);

export const primaryNavSelector = createSelectorByArray(
  ['app', selectApp],
  ['t', selectT],
  ['user', selectUser],
  ['flags', selectFlags],
  ['primary', primarySelector],
  ['activeTab', selectActiveTab]
);

export const flyoutsSelector = createSelector(
  selectActiveTab,
  selectFlyouts,
  selectCards,
  (activeTab, flyouts, cards) => {
    return Object.keys(flyouts).reduce((result, tab) => {
      const flyout = flyouts[tab];
      const navbarCards = cards[tab];

      return [
        ...result,
        {
          ...flyout,
          navbarCards,
          isActive: activeTab === tab,
        },
      ];
    }, []);
  }
);

export const subnavSelector = createSelectorByArray(
  ['app', selectApp],
  ['t', selectT],
  ['user', selectUser],
  ['flags', selectFlags],
  ['flyouts', flyoutsSelector]
);

export const indicatorSelector = createSelector(
  selectNavbar,
  navbar => {
    const { activeTab, primary } = navbar;
    let tab;
    if (activeTab) {
      tab = primary.find(t => t.key === activeTab);
    }

    return {
      activePrimaryTab: tab,
    };
  }
);
