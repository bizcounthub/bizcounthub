import { createSelector } from 'reselect';
import {
  selectApp,
  selectT,
  selectFlags,
  selectUser,
} from 'app/common/selectors/common';

function renderTabs(app, t, flags, user) {
  const { appName, brand, country } = app;
  const { isGroupon } = brand;
  if (!user) {
    return [];
  }

  const tabs = [
    {
      id: 'ls-my-groupons',
      bhc: 'UserProfileNavBarTab:My Groupons',
      bhw: 'UserProfileNavBar',
      url: '/mystuff',
      text: t.userNav.myGroupons,
      active: appName === 'mygroupons',
    },
    {
      id: 'ls-older-vouchers',
      url: '/ls_voucher_archive',
      bhc: 'UserProfileNavBarTab:Vouchers Before May 2017',
      text: t.userNav.voucherArchive,
      active: 'itier-ls-voucher-archive',
      filter: !isGroupon && country === 'US',
    },
    {
      id: 'ls-my-linked-deals',
      bhc: 'UserProfileNavBarTab:My Groupon+ Deals',
      url: '/mylinkeddeals',
      text: t.userNav.myCardLinkedDeals,
      active: appName === 'clo',
      filter: isGroupon && country === 'US',
    },
    {
      id: 'ls-my-reservations',
      bhc: 'UserProfileNavBarTab:My Reservations',
      url: `/users/${user.id}/reservations`,
      text: t.userNav.myReservations,
      active: appName === 'my_reservations',
      filter: isGroupon && country === 'US',
    },
    {
      id: 'ls-my-account',
      bhc: 'UserProfileNavBarTab:My Account',
      url: country === 'US' ? `/users/${user.id}/account` : '/myaccount',
      text: t.userNav.myAccount,
      active: appName === 'my_account',
    },
    {
      id: 'ls-my-profile',
      bhc: 'UserProfileNavBarTab:My Profile',
      url: `/users/${user.id}/profile/edit`,
      text: t.userNav.myProfile,
      active: appName === 'myprofile',
      filter: isGroupon && country === 'US',
    },
    {
      id: 'ls-my-email-subs',
      bhc: 'UserProfileNavBarTab:My Email Subscriptions',
      url: '/subscription_center',
      text: t.userNav.myEmailSubs,
      active: appName === 'sub_center',
      filter: country !== 'US' || user.isActive,
    },
    {
      id: 'ls-privacy-center',
      bhc: 'UserProfileNavBarTab:Privacy Center',
      url: t.userNav.privacyCenterLink,
      text: t.userNav.privacyCenter,
      filter: country !== 'US' && flags.enablePrivacyCenter,
    },
  ];

  return tabs.filter(item => !item.hasOwnProperty('filter') || item.filter);
}

export const myStuffLayoutSelector = createSelector(
  selectApp,
  selectT,
  selectFlags,
  selectUser,
  (app, t, flags, user) => ({
    app,
    t,
    flags,
    user,
    tabs: renderTabs(app, t, flags, user),
  })
);
