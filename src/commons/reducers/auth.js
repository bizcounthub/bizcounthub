import {
  INITIALIZE,
  USER_SUCCESS,
  USER_FAILURE,
} from '../contants/action-types';

const INITIAL_STATE = {
  user: null,
  error: null,
  isAuthenticated: undefined,
};

const loadUserSuccess = (state, action) => {
  const { user } = action;
  return {
    ...state,
    user,
    error: null,
    isAuthenticated: user && user.id ? true : false,
  };
};

const loadUserFailure = (state, action) => {
  if (!action.error) {
    return state;
  }

  return {
    ...state,
    error: action.error,
    isAuthenticated: false,
  };
};

function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INITIALIZE:
      return Object.assign({}, state, action.payload.auth);
    case USER_SUCCESS:
      return loadUserSuccess(state, action);
    case USER_FAILURE:
      return loadUserFailure(state, action);
    default:
      return state;
  }
}

export default authReducer;
