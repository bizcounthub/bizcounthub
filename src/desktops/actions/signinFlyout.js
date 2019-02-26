import {
  signInForm,
  signInFacebook,
  signInGoogle,
} from 'app/common/helpers/auth';
import { refresh, redirectTo } from 'app/common/helpers/history';
import { trackEvent } from 'app/common/helpers/track';
import {
  SHOW_SIGNIN_FLYOUT,
  HIDE_SIGNIN_FLYOUT,
  ACTIVE_SIGNIN_FLYOUT,
  DEACTIVE_SIGNIN_FLYOUT,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  FBREAUTH_HIDE,
  FBREAUTH_SHOW,
} from 'app/common/constants/action-types';

let hideFlyoutTimeoutId = null;

let showSelectFlyout;

function checkExperimentWhileShowingFlyout() {
  // make sure only call finch.experiment once
  if (showSelectFlyout === undefined) {
    showSelectFlyout = false;
    Finch.experiment('LS-5320-Groupon-Select-Flyout-Signup', {
      Treatment: () => {
        showSelectFlyout = true;
      },
    });
  }
  return showSelectFlyout;
}

export function hideFBReauthModal() {
  return { type: FBREAUTH_HIDE };
}

export function hideSigninFlyoutWithDelay() {
  return hideSigninFlyout(false, true);
}

export function hideSigninFlyout(force = true, delay = false) {
  if (hideFlyoutTimeoutId) {
    window.clearTimeout(hideFlyoutTimeoutId);
  }

  return (dispatch, getState) => {
    const { signinFlyout } = getState();
    if (!signinFlyout.show) {
      return;
    }

    if (!signinFlyout.active || force) {
      if (delay) {
        hideFlyoutTimeoutId = window.setTimeout(() => {
          dispatch({ type: HIDE_SIGNIN_FLYOUT });
        }, 250);
      } else {
        dispatch({ type: HIDE_SIGNIN_FLYOUT });
      }
    }
  };
}

export function showSigninFlyout() {
  if (hideFlyoutTimeoutId) {
    window.clearTimeout(hideFlyoutTimeoutId);
  }

  return (dispatch, getState) => {
    const { signinFlyout } = getState();
    if (signinFlyout.show) {
      return;
    }

    // check experiment
    checkExperimentWhileShowingFlyout();
    dispatch({ type: SHOW_SIGNIN_FLYOUT, showSelectFlyout });
  };
}

export function activeSigninFlyout() {
  return { type: ACTIVE_SIGNIN_FLYOUT };
}

export function deactiveSigninFlyout() {
  return { type: DEACTIVE_SIGNIN_FLYOUT };
}

export function signInWithForm(postData) {
  return dispatch => {
    dispatch({
      type: SIGNIN_REQUEST,
    });

    return signInForm(postData)
      .then(() => {
        dispatch({
          type: SIGNIN_SUCCESS,
        });
        refresh();
      })
      .catch(err => {
        dispatch({
          type: SIGNIN_FAILURE,
          error: err,
        });
      });
  };
}

export function signInWithGoogle(googleUser) {
  return (dispatch, getState) => {
    const { flags } = getState();
    dispatch({
      type: SIGNIN_REQUEST,
    });
    return signInGoogle(googleUser, flags.showGDPRSigninFlyout)
      .then(location => {
        dispatch({
          type: SIGNIN_SUCCESS,
        });
        redirectTo(location);
      })
      .catch(err => {
        dispatch({
          type: SIGNIN_FAILURE,
          error: err,
        });
        trackEvent('google-signin-failure', { error: err });
      });
  };
}

export function signInWithFacebook(reauth = false) {
  return (dispatch, getState) => {
    const { flags, signinFlyout } = getState();
    dispatch({
      type: SIGNIN_REQUEST,
    });

    if (signinFlyout.showFBReauthModal) {
      dispatch(hideFBReauthModal());
    }

    return signInFacebook(reauth, flags.showGDPRSigninFlyout)
      .then(result => {
        switch (result.type) {
          case 'success': {
            dispatch({
              type: SIGNIN_SUCCESS,
            });
            redirectTo(result.location);
            break;
          }
          case 'reauth': {
            dispatch({ type: FBREAUTH_SHOW });
            break;
          }
          default: {
            dispatch({
              type: SIGNIN_FAILURE,
              error: result.error,
            });
          }
        }
      })
      .catch(err => {
        dispatch({
          type: SIGNIN_FAILURE,
          error: err,
        });
      });
  };
}
