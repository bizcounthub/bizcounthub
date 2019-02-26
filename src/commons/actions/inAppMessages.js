import { block, fetchInAppMessages } from '../helpers/inAppMessages';
import {
  BLOCK_IN_APP_MESSAGES_BANNER,
  UPDATE_IN_APP_MESSAGES,
  FETCH_IN_APP_MESSAGES_FAILURE,
  MARK_NOTIFICATIONS_AS_VIEWED,
  UPDATE_UNVIEWED_COUNT,
} from '../constants/action-types';

/**
 * Block the banner
 * @param {object} banner - banner object from IAM api
 */
export function blockBanner(banner) {
  block(banner.id);
  return {
    type: BLOCK_IN_APP_MESSAGES_BANNER,
  };
}

/**
 * Load in app messages
 */
export function loadInAppMessages() {
  return (dispatch, getState) =>
    fetchInAppMessages(getState().location.division, getState().app.appName)
      .then(result => {
        const { banner, notifications = {} } = result.items;

        dispatch({
          type: UPDATE_IN_APP_MESSAGES,
          banner,
          notifications,
        });
      })
      .catch(() => {
        dispatch({
          type: FETCH_IN_APP_MESSAGES_FAILURE,
        });
      });
}

/**
 * Mark messages as viewed
 * @param {Array} messageIds - message ids
 */
export function markAsViewed(messageIds) {
  return dispatch => {
    dispatch({
      type: MARK_NOTIFICATIONS_AS_VIEWED,
      messageIds,
    });
  };
}

export function updateUnViewedCount() {
  return { type: UPDATE_UNVIEWED_COUNT };
}
