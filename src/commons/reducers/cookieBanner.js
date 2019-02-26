import {
  BOTTOM_GDPR_INIT,
  BOTTOM_GDPR_ACCEPT,
} from '../contants/action-types';

const INITIAL_STATE = {
  showBottomBanner: false,
};

export default function cookieBannerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case BOTTOM_GDPR_INIT:
      return {
        ...state,
        showBottomBanner: action.show,
      };
    case BOTTOM_GDPR_ACCEPT:
      return {
        ...state,
        showBottomBanner: false,
      };
    default:
      return state;
  }
}
