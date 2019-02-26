import { createSelector } from 'reselect';

export const selectApp = state => state.app;
export const selectT = state => state.t;
export const selectFlags = state => state.flags;
export const selectLocation = state => state.location;
export const selectSearch = state => state.search;
export const selectDealSearch = state => state.dealSearch;
export const selectLocationSearch = state => state.locationSearch;
export const selectCart = state => state.cart;
export const selectAuth = state => state.auth;
export const selectUser = state =>
  state.auth.isAuthenticated && state.auth.user ? state.auth.user : null;

/*
const mySelector = createSelector(
  selectApp,
  selectT,
  selectFlags,
  (app, t, flags) => ({
    app,
    t,
    flags,
  })
);

->

const mySelector = createSelectorByArray([
  ['app', selectApp],
  ['t', selectT],
  ['flags', selectFlags],
])
*/
export const createSelectorByArray = (...items) => {
  const selectorMap = new Map(items);

  const names = Array.from(selectorMap.keys());
  const selectors = Array.from(selectorMap.values());

  return createSelector(
    ...selectors,
    (...params) =>
      names.reduce(
        (acc, name, index) =>
          Object.assign(acc, {
            [name]: params[index],
          }),
        {}
      )
  );
};
