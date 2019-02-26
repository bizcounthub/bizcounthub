import {
  CART_SIZE_REQUEST,
  CART_SIZE_FAILURE,
  CART_SIZE_SUCCESS,
  CART_WIDGET_REQUEST,
  CART_WIDGET_SUCCESS,
  CART_WIDGET_FAILURE,
} from 'app/common/constants/action-types';
import { fetchCartSize, fetchCartWidget } from 'app/common/helpers/cart';

/**
 * Get cart size from API
 */
export function loadCartSize() {
  return (dispatch, getState) => {
    const { flags } = getState();
    if (!flags.showCart) {
      return Promise.resolve({});
    }

    dispatch({
      type: CART_SIZE_REQUEST,
    });

    return fetchCartSize()
      .then(result => {
        const { size, quantity } = result;
        dispatch({
          type: CART_SIZE_SUCCESS,
          size,
          quantity,
        });
      })
      .catch(error =>
        dispatch({
          type: CART_SIZE_FAILURE,
          error,
        })
      );
  };
}

export function loadCartWidget() {
  return dispatch => {
    dispatch({
      type: CART_WIDGET_REQUEST,
    });

    return fetchCartWidget()
      .then(result => {
        dispatch({
          type: CART_WIDGET_SUCCESS,
          ...result,
        });
      })
      .catch(error =>
        dispatch({
          type: CART_WIDGET_FAILURE,
          error,
        })
      );
  };
}
