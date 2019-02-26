import { get, post } from 'app/common/helpers/fetch';
import { categoryId } from 'app/common/helpers/head-data';

/** Fetch in app messages from API by division */
export function fetchInAppMessages(division, appName) {
  const endpoint = `/layout/api/v2/${division}/in-app-messages`;

  return get(endpoint, { categoryId, appName }).then(result => {
    const notifications = result.items.notifications;
    if (notifications && Array.isArray(notifications.messages)) {
      notifications.messages.forEach(message => {
        const { startAt, url } = message;
        const started = new Date(startAt).getTime(); // ms
        message.started = started;
        message.url = url || '/';
        message.bhd = JSON.stringify({
          title: message.title || '',
          message: message.message || '',
          id: message.campId || '',
        });
      });
    }
    return result;
  });
}

/**
 * Record event
 * @param {Array<number>} messageIds - message ids
 * @param {string} eventName - VIEWED | CLICKED
 */
export function recordEvent(messageIds, eventName) {
  const endpoint = `/layout/api/v2/in-app-messages/record-event`;
  return post(endpoint, {
    messageIds,
    eventName,
  });
}

/**
 * Mark a message as clicked
 * @param {string} messageId - message id
 */
export function markAsClickedRequest(messageId) {
  return recordEvent([messageId], 'CLICKED');
}

/**
 * Call record event API to mark the messages as viewed
 * @param {Array} messageIds - message ids
 */
export function markAsViewedRequest(messageIds) {
  return recordEvent(messageIds, 'VIEWED').catch(() => {});
}

/**
 * Get blocked banner ids
 */
export function getBlockedIds() {
  return (Cookie.get('msg_hide') || '').split(',');
}

/**
 * Check if the banner was blocked
 * @param {string} id - banner Id
 */
export function blocked(id) {
  return getBlockedIds().indexOf(`${id}`) !== -1;
}

/**
 * Block the banner id
 * @param {string} id - banner id
 */
export function block(id) {
  const blockedIds = getBlockedIds().filter(i => i !== id);
  blockedIds.push(id);
  if (blockedIds.length > 20) {
    blockedIds.shift();
  }
  Cookie.set('msg_hide', blockedIds.join(','), { consentClass: 'essential' });
}
