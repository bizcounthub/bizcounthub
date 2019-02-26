import { h } from 'preact';
import { createSelector } from 'reselect';
import {
  selectApp,
  selectT,
  selectFlags,
  selectAuth,
  selectUser,
  selectCart,
} from 'app/common/selectors/common';
import { appendReturnTo } from 'app/common/helpers/url';
import GrouponPlusIcon from 'app/common/components/icons/GrouponPlusIcon';

const selectSigninFlyout = state => state.signinFlyout;
const selectResponsive = state => state.responsive;

let enabledResponsive;
function isResponsiveEnabled() {
  if (enabledResponsive === undefined) {
    enabledResponsive = document.body.classList.contains('ls-resp');
  }
  return enabledResponsive;
}

export const hideSigninFlyoutForResponsiveSelector = createSelector(
  selectResponsive,
  responsive =>
    isResponsiveEnabled() &&
    responsive.matches.maxWidth960 &&
    responsive.initialized
);

export const userNavSelector = createSelector(
  selectApp,
  selectT,
  selectFlags,
  selectAuth,
  selectUser,
  selectCart,
  selectResponsive,
  hideSigninFlyoutForResponsiveSelector,
  (
    app,
    t,
    flags,
    auth,
    user,
    cart,
    responsive,
    hideSigninFlyoutForResponsive
  ) => ({
    app,
    t,
    flags,
    auth,
    user,
    cart,
    responsive,
    hideSigninFlyoutForResponsive,
  })
);

export const signinFlyoutSelector = createSelector(
  selectApp,
  selectT,
  selectFlags,
  selectAuth,
  selectSigninFlyout,
  selectUser,
  selectResponsive,
  hideSigninFlyoutForResponsiveSelector,
  (
    app,
    t,
    flags,
    auth,
    signinFlyout,
    user,
    responsive,
    hideSigninFlyoutForResponsive
  ) => ({
    app,
    t,
    flags,
    auth,
    signinFlyout,
    user,
    responsive,
    hideSigninFlyoutForResponsive,
  })
);

export const myStuffMenuItemsSelector = createSelector(
  selectApp,
  selectT,
  selectFlags,
  selectAuth,
  selectUser,
  selectSigninFlyout,
  (app, t, flags, auth, user, signinFlyout) => {
    const { country } = app;

    function urlWithSigninRedirect(url) {
      if (!user) {
        return `/login?return_to=${encodeURIComponent(url)}`;
      }
      return url;
    }

    const menuItems = [
      {
        type: 'primary',
        id: 'user-my-groupon',
        bhw: 'user-flyout-mygroupons-link',
        url: urlWithSigninRedirect('/mystuff'),
        text: t.userNav.myGroupons,
        iconClass: 'icon-tag',
      },
      {
        type: 'primary',
        id: 'user-my-card-linked-deals',
        bhw: 'user-flyout-mycardlinkeddeals-link',
        icon: <GrouponPlusIcon />,
        url: urlWithSigninRedirect('/mylinkeddeals'),
        text: t.userNav.myGrouponPlusDeals,
        filter: flags.showMyLinkedDealsLink,
      },
      {
        type: 'primary',
        id: 'user-wishlish',
        url: urlWithSigninRedirect('/wishlist'),
        bhw: 'user-flyout-wishlist-link',
        iconClass: 'icon-heart',
        text: t.userNav.myWishlist,
        filter: flags.showWishlist,
      },
      {
        type: 'separator',
      },
      {
        type: 'secondary',
        id: 'user-account',
        bhw: 'UserAccount',
        url: urlWithSigninRedirect('/myaccount'),
        text: t.userNav.myAccount,
      },
      {
        type: 'secondary',
        id: 'how-groupon-works',
        bhw: 'UserGrouponWorks',
        url: '/landing/welcome-to-groupon',
        text: t.userNav.howGrouponWorks,
        filter: country === 'GB',
      },
      {
        type: 'secondary',
        id: 'user-profile',
        bhw: 'UserProfile',
        url: urlWithSigninRedirect('/myprofile'),
        text: t.userNav.myProfile,
        filter: flags.showMyProfile,
      },
      {
        type: 'secondary',
        id: 'user-subscriptions',
        bhw: 'UserSubscriptions',
        url: '/subscription_center',
        text: t.userNav.mySubscriptions,
        filter: user && user.showSubscriptions,
      },
      {
        type: 'secondary',
        id: 'user-giftcard',
        bhw: 'UserGiftcard',
        url: '/giftcards#redemption_section',
        text: t.userNav.myGiftcard,
        filter: country === 'US' && flags.showGiftCards,
      },
      {
        type: 'secondary',
        id: 'refer-a-friend',
        className: 'refer-a-friend',
        bhw: 'UserReferFriends',
        url: '/visitor_referral',
        text: t.userNav.referAFriendMessage,
        filter: flags.showReferAFriend,
      },
      {
        type: 'secondary',
        id: 'user-merchant-center',
        bhw: 'UserMerchant-center',
        url: t.links.myMerchantCenterLink,
        text: t.userNav.myMerchantCenter,
        filter: flags.showMerchantCenterLink && user && user.isMerchant,
      },
      {
        type: 'secondary',
        id: 'sign-out',
        bhw: 'UserSignOut',
        url: appendReturnTo('/logout'),
        text: t.userNav.signOut,
        className: 'sign-out referrer-link',
        filter: !!user,
      },
      {
        type: 'secondary',
        id: 'sign-up',
        bhw: 'UserSignUp',
        url: appendReturnTo('/signup'),
        text: t.userNav.signInFlyoutSignUp,
        className: 'sign-up',
        filter: !user,
      },
    ];

    return {
      app,
      t,
      flags,
      auth,
      user,
      signinFlyout,
      myStuffMenuItems: menuItems.filter(
        item => !item.hasOwnProperty('filter') || item.filter
      ),
    };
  }
);
