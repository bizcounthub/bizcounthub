import {
  RESPONSIVE_INIT,
  RESPONSIVE_MEDIA_MATCH,
} from '../../commons/contants/action-types';

export const INITIAL_STATE = {
  initialized: false,
  matches: {
    maxWidth960: true,
  },
};

function responsiveReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESPONSIVE_INIT:
      return {
        ...state,
        matches: action.matches || {},
        initialized: true,
      };
    case RESPONSIVE_MEDIA_MATCH:
      return {
        ...state,
        matches: action.matches || {},
      };
    default:
      return state;
  }
}

export default responsiveReducer;
