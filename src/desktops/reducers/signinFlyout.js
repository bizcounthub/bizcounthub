import {
  SHOW_SIGNIN_FLYOUT,
  HIDE_SIGNIN_FLYOUT,
  ACTIVE_SIGNIN_FLYOUT,
  DEACTIVE_SIGNIN_FLYOUT,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  FBREAUTH_SHOW,
  FBREAUTH_HIDE,
} from '../../commons/contants/action-types';

export const INITIAL_STATE = {
  show: false,
  active: false,
  loading: false,
  signedIn: false,
  showFBReauthModal: false,
  showSelectFlyout: false,
  error: null,
};

function signinFlyoutReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_SIGNIN_FLYOUT:
      return {
        ...state,
        show: true,
        showSelectFlyout: action.showSelectFlyout,
      };
    case HIDE_SIGNIN_FLYOUT:
      return {
        ...state,
        show: false,
        active: false,
      };
    case ACTIVE_SIGNIN_FLYOUT:
      return {
        ...state,
        active: true,
      };
    case DEACTIVE_SIGNIN_FLYOUT:
      return {
        ...state,
        active: false,
      };
    case SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        signedIn: true,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FBREAUTH_SHOW:
      return {
        ...state,
        showFBReauthModal: true,
      };
    case FBREAUTH_HIDE:
      return {
        ...state,
        showFBReauthModal: false,
      };
    default:
      return state;
  }
}

export default signinFlyoutReducer;
