import { createSelector } from 'reselect';
import { selectApp, selectT, selectFlags } from 'app/common/selectors/common';

export const selectNotifications = state => state.notifications;
export const selectUnviewedCount = state => state.notifications.unviewedCount;
export const selectAuth = state => state.auth;

export const bellIconSelector = createSelector(
  selectApp,
  selectFlags,
  selectT,
  selectUnviewedCount,
  (app, flags, t, unviewedCount) => ({
    app,
    flags,
    t,
    unviewedCount,
  })
);

export const notificationsSelector = createSelector(
  selectApp,
  selectFlags,
  selectT,
  selectAuth,
  selectNotifications,
  (app, flags, t, auth, notifications) => ({
    flags,
    app,
    t,
    auth,
    messages: notifications.messages,
  })
);
