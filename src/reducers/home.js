import { HOME } from '../constants/Action';

export default (state = {}, action) => {
  switch (action.type) {
    case HOME:
      return {
        ...state,
        tags: action.tags
      }
    default:
      return {
        ...state
      };
  }
}