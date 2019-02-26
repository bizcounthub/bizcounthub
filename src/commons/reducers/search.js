import * as ActionTypes from '../contants/action-types';

export const INITIAL_STATE = {
  context: '',
  submitting: false,
  error: null,
  redirectUrl: null,
};

function openSearch(state, action) {
  const { context } = action;
  if (state.context === context) {
    return state;
  }
  return {
    ...state,
    context,
  };
}

function closeSearch(state) {
  if (!state.context) {
    return state;
  }
  return {
    ...state,
    context: null,
    error: null,
  };
}

function switchContext(state, action) {
  const { context } = action;
  if (state.context === context) {
    return state;
  }

  return {
    ...state,
    context,
  };
}

function searchReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.INITIALIZE:
      return Object.assign({}, state, payload.search);
    case ActionTypes.OPEN_SEARCH:
      return openSearch(state, action);
    case ActionTypes.CLOSE_SEARCH:
      return closeSearch(state);
    case ActionTypes.SWITCH_SEARCH_CONTEXT:
      return switchContext(state, action);
    case ActionTypes.CURRENT_POSITION_REQUEST:
    case ActionTypes.SEARCH_SUBMIT:
    case ActionTypes.GEOCODE_REQUEST:
      return {
        ...state,
        submitting: true,
      };
    case ActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        submitting: false,
        deal: payload.deal,
        redirectUrl: payload.url,
      };
    case ActionTypes.CURRENT_POSITION_SUCCESS:
    case ActionTypes.GEOCODE_SUCCESS:
      return {
        ...state,
        submitting: false,
      };
    case ActionTypes.CURRENT_POSITION_FAILURE:
    case ActionTypes.GEOCODE_FAILURE:
    case ActionTypes.SEARCH_FAILURE:
      return {
        ...state,
        submitting: false,
        error: action.error,
      };
    case ActionTypes.SEARCH_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case ActionTypes.SEARCH_INPUT_BLUR:
      if (!state.error) {
        return state;
      }
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

export default searchReducer;
