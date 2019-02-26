/**
 *
 * @param eventName
 * @param state
 * @param title
 * @param url
 */
function triggerEvent(eventName, state, title, url) {
  const event = document.createEvent('HTMLEvents');
  event.initEvent(eventName, true, true);
  Object.assign(event, { eventName, state, title, url });
  window.dispatchEvent(event);
}

/**
 * Add window.history events
 * onpushstate, onreplacestate and onchangestate.
 */

export function initHistoryStates(history) {
  const { pushState, replaceState } = history;

  history.pushState = function(state, title, URL) {
    const result = pushState.apply(history, arguments);
    triggerEvent('pushstate', state, title, URL);
    triggerEvent('changestate', state, title, URL);
    return result;
  };

  history.replaceState = function(state, title, URL) {
    const result = replaceState.apply(history, arguments);
    triggerEvent('replacestate', state, title, URL);
    triggerEvent('changestate', state, title, URL);
    return result;
  };

  return window.addEventListener('popstate', e =>
    triggerEvent('changestate', e.state)
  );
}
