/*eslint-disable no-undef*/
/* eslint no-underscore-dangle: 0 */

//__webpack_public_path__ = window.remoteUrl;

import createStore from 'app/desktop/store';
import renderComponent from 'app/common/helpers/renderComponent';
import NotificationRoot from 'app/desktop/components/notifications/Notifications';
import InAppMessagesRoot from 'app/desktop/components/inAppMessages/inAppMessages';
import BottomCookieBannerRoot from 'app/desktop/components/cookieBanner/BottomCookieBanner';
import UserNavRoot from 'app/desktop/components/userNav/UserNav';
import SigninFlyoutRoot from 'app/desktop/components/userNav/SigninFlyoutContainer';
import MyStuffLayoutRoot from 'app/desktop/components/userNav/MyStuffLayout';
import subscribers from 'app/common/subscribers';
import { dispatchEvent } from 'src/frontend/helper/event';
import { initHistoryStates } from 'app/common/helpers/history_events';

import { init, fetchData } from 'app/desktop/actions/app';
import { windowLoaded } from '@grpn/document-states';

const store = createStore();

export default () => {
  require('preact/devtools');
  // subscribe state change
  subscribers(store);

  // // init app data
  store.dispatch(init(window.__LS_INITIAL_STATE__));

  windowLoaded.then(() => {
    // // lazy load data from storage
    store.dispatch(fetchData());
  });

  initHistoryStates(window.history);

  // render root components

  renderComponent(store, InAppMessagesRoot, 'ls-in-app-messages');
  renderComponent(
    store,
    NotificationRoot,
    'ls-header-top-row',
    'ls-header-inbox-flyout-container'
  );
  renderComponent(store, BottomCookieBannerRoot, 'gdpr-bottom-banner');
  renderComponent(store, UserNavRoot, 'ls-user-nav', 'ls-user-nav-menu');
  renderComponent(
    store,
    SigninFlyoutRoot,
    'ls-header-top-row',
    'ls-header-signin-flyout-container'
  );
  renderComponent(store, MyStuffLayoutRoot, 'ls-my-stuff-wrapper');

  const isSearchHeader = document.head.dataset.header === 'default';
  if (document.body.classList.contains('ls-resp')) {
    import(/* webpackChunkName: "responsive" */ 'app/desktop/responsive').then(
      ({ default: Responsive }) => {
        new Responsive(store.dispatch);
      }
    );
  }
  if (isSearchHeader) {
    import(/* webpackChunkName: "desktop-preact-search-and-nav" */ 'app/desktop/components/searchAndNav').then(
      ({ PrimaryNavRoot, SearchBarRoot, SubNavRoot }) => {
        renderComponent(
          store,
          PrimaryNavRoot,
          'ls-channel-nav',
          'ls-primary-nav-row'
        );

        renderComponent(
          store,
          SearchBarRoot,
          'ls-search-wrapper',
          'ls-search-form'
        );
        dispatchEvent('loaded-preact-search');
        renderComponent(store, SubNavRoot, 'ls-channel-nav', 'subnav');
      }
    );
  }
};
