import {
  UPDATE_IN_APP_MESSAGES,
  BLOCK_IN_APP_MESSAGES_BANNER,
} from '../contants/action-types';

const INITIAL_STATE = {
  banner: null,
  cartSize: 0,
};

function iamReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_IN_APP_MESSAGES:
      return {
        ...state,
        banner: action.banner,
      };
    case BLOCK_IN_APP_MESSAGES_BANNER:
      return {
        ...state,
        banner: null,
      };
    default:
      return state;
  }
}

export default iamReducer;
