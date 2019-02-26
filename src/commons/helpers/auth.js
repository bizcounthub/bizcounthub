import { get, postForm } from 'app/common/helpers/fetch';
import { getConsumerId } from 'app/common/helpers/cookie';

const sessionStorageKey = 'verifiedUser';

function saveSession(user) {
  if (user && user.id) {
    try {
      sessionStorage.setItem(sessionStorageKey, JSON.stringify(user));
      } catch (__) {} // eslint-disable-line
  }
  return user;
}

export function removeSession() {
  try {
    sessionStorage.removeItem(sessionStorageKey);
  } catch (__) {} // eslint-disable-line
}

/**
 * Get authed user from session storage
 */
export const getUserFromStorage = () => {
  let user = null;
  try {
    const userData = sessionStorage.getItem(sessionStorageKey);
    user = JSON.parse(userData);
    if (!user.id) {
      user = null;
    }
  } catch (__) {} // eslint-disable-line

  return user;
};

export function fetchUser() {
  return get('/layout/calls/users/v1').then(user => saveSession(user));
}

/**
 * Load user info from session storage
 * @returns {?Object}
 *  - signed in: User object
 *  - signed out: null
 */
export function loadUserFromSession() {
  // check snickerdoodle cookie first
  if (!getConsumerId()) {
    return null;
  }

  // load data from session storage second
  return getUserFromStorage();
}

export function loadUser() {
  // check snickerdoodle cookie first
  if (!getConsumerId()) {
    return Promise.resolve(null);
  }

  // load data from session storage second
  const user = getUserFromStorage();
  if (user) {
    return Promise.resolve(user);
  }

  return fetchUser();
}

export function signInForm(postData) {
  const { email, password, rememberMe } = postData;

  return postForm('/login/iframe', {
    email,
    password,
    remember_me: rememberMe ? 1 : 0,
  });
}

export function signInGoogle(googleUser, showGDPRSigninFlyout) {
  const url = `${location.origin}/google_auth_callback${location.search}`;
  const postData = {
    id_token: googleUser.getAuthResponse().id_token,
    remember_me: 1,
  };

  if (showGDPRSigninFlyout) {
    Object.assign(postData, { legalConsents: getConsentsPayload('google') });
  }

  return postForm(url, postData).then(resData => {
    const { redirectTo } = resData;
    return redirectTo || window.location.href;
  });
}

function fbLogin(option) {
  return new Promise(resolve => {
    window.FB.login(res => {
      if (res && res.status === 'connected') {
        if (res.authResponse) {
          const {
            grantedScopes = '',
            accessToken,
            signedRequest,
          } = res.authResponse;
          if (grantedScopes.includes('email')) {
            window.FB.api(
              '/me',
              {
                fields:
                  'id,name,email,first_name,last_name,picture.type(square)',
              },
              userInfo => {
                const postData = {
                  access_token: accessToken,
                  signed_request: signedRequest,
                  email: userInfo.email,
                  remember_me: true,
                };

                resolve({
                  type: 'save',
                  postData,
                });
              }
            );
          } else {
            resolve({
              type: 'reauth',
            });
          }
        } else {
          resolve({
            type: 'error',
            error: 'facebook_auth_response_error',
          });
        }
      } else {
        resolve({
          type: 'error',
          error: 'facebook_connected_error',
        });
      }
    }, option);
  });
}

export function signInFacebook(reauth = false, showGDPRSigninFlyout) {
  const option = {
    scope: 'email,user_friends,user_hometown',
    return_scopes: true,
  };

  if (reauth) {
    option.auth_type = 'rerequest';
  }

  return fbLogin(option).then(result => {
    if (result.type !== 'save') {
      return result;
    }

    if (showGDPRSigninFlyout) {
      Object.assign(result.postData, {
        legalConsents: getConsentsPayload('facebook'),
      });
    }

    return postForm('/facebook', result.postData).then(resData => {
      const { location } = resData || {};
      return {
        type: 'success',
        location: location || window.location.href,
      };
    });
  });
}

function getLegalVersionsFromDOM() {
  let privacyVersion = '-1';
  let termsVersion = '-1';
  const gdprEl = document.getElementById('sf-gdpr');
  if (gdprEl) {
    if (gdprEl.dataset.privacyVersion) {
      privacyVersion = gdprEl.dataset.privacyVersion.toString();
    }
    if (gdprEl.dataset.termsVersion) {
      termsVersion = gdprEl.dataset.termsVersion.toString();
    }
  }
  return { privacyVersion, termsVersion };
}

function getConsentsPayload(platform) {
  const { termsVersion, privacyVersion } = getLegalVersionsFromDOM();
  const sharedProps = {
    workflowType: 'registration',
    eventType: 'accept',
    logType: 'consent',
    metadata: { login: platform },
  };

  const payload = [
    Object.assign(
      {
        termsType: 'privacyPolicy',
        termsTypeVersion: privacyVersion,
      },
      sharedProps
    ),

    Object.assign(
      {
        termsType: 'termsOfService',
        termsTypeVersion: termsVersion,
      },
      sharedProps
    ),
  ];

  return JSON.stringify(payload);
}
