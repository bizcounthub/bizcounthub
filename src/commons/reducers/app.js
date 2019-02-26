import * as ActionTypes from '../contants/action-types';

export const INITIAL_STATE = {
  appName: 'layout-service',
  brand: {
    isGroupon: true,
    title: 'Groupon',
  },
};

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.INITIALIZE:
      return Object.assign({}, state, action.payload.app);
    default:
      return state;
  }
}

export default appReducer;
