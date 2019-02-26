import {
  CART_SIZE_REQUEST,
  CART_SIZE_SUCCESS,
  CART_SIZE_FAILURE,
  CART_WIDGET_REQUEST,
  CART_WIDGET_SUCCESS,
  CART_WIDGET_FAILURE,
} from '../contants/action-types';

const INITIAL_STATE = {
  sizeStatus: 'initial',
  widgetStatus: 'initial',
  sizeError: null,
  widgetError: null,
  size: 0,
  quantity: '',
  items: [],
  uuid: null,
  subtotal: null,
};

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CART_SIZE_REQUEST:
      return {
        ...state,
        sizeError: null,
        sizeStatus: 'loading',
      };
    case CART_SIZE_SUCCESS:
      return {
        ...state,
        sizeStatus: 'success',
        size: action.size || 0,
        quantity: action.quantity || '',
      };
    case CART_SIZE_FAILURE:
      return {
        ...state,
        sizeStatus: 'failure',
        sizeError: action.error,
      };
    case CART_WIDGET_REQUEST:
      return {
        ...state,
        widgetStatus: 'loading',
        widgetError: null,
      };
    case CART_WIDGET_SUCCESS:
      return {
        ...state,
        widgetStatus: 'success',
        size: action.size,
        quantity: action.quantity,
        items: action.items,
        uuid: action.uuid,
        subtotal: action.subtotal,
      };
    case CART_WIDGET_FAILURE:
      return {
        ...state,
        widgetStatus: 'failure',
        widgetError: action.error,
      };
    default:
      return state;
  }
}

export default cartReducer;
