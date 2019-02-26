/* eslint no-underscore-dangle: 0 */

import { h, render } from 'preact';
import { Provider } from 'preact-redux';

export default function renderComponent(
  store,
  Component,
  containerId,
  replaceNodeId
) {
  const container = document.getElementById(containerId);
  if (container) {
    const replaceNode = replaceNodeId
      ? document.getElementById(replaceNodeId)
      : null;

    if (replaceNodeId && !replaceNode) {
      return;
    }

    render(
      <Provider store={store}>
        <Component />
      </Provider>,
      container,
      replaceNode || container.firstElementChild
    );
  }
}
