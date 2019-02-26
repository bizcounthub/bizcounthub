import { requestIdleCallback } from './event';
import { getB } from './cookie';

/**
 * Method to pass data to Optimize so the event/data shows in the splunk warehouse
 * @param {String} eventName - Name of the event to emit to splunk
 * @param {Object} payload - Data to emit to splunk (Optional)
 */
export function trackEvent(eventName, payload = {}) {
  if (!window.OptimizeSuite || !window.OptimizeSuite.TrackingHub) {
    return;
  }

  requestIdleCallback(() => {
    window.OptimizeSuite.TrackingHub.add(
      eventName,
      Object.assign({}, payload, {
        b: getB(),
        pageId: window.location.pathname,
      })
    );
  });
}
