import { get } from 'app/common/helpers/fetch';
import { getConsumerId } from 'app/common/helpers/cookie';

/**
 * Fetch cart size
 */
export function fetchCartSize() {
  const { cartSize } = Groupon.endpoints || {};
  const endpoint = cartSize || '/cart/size';

  return get(endpoint, { consumerId: getConsumerId() }).then(result => {
    const { quantity_value, quantity } = result || {};

    return {
      size: quantity_value || 0,
      quantity: quantity || '',
    };
  });
}

export function fetchCartWidget() {
  const { cart } = Groupon.endpoints || {};
  const endpoint = cart || '/cart/widget';

  return get(endpoint, { consumerId: getConsumerId() }).then(result => {
    const { items, quantity_value, quantity, uuid, subtotal } = result || {};
    return {
      size: quantity_value || 0,
      quantity: quantity || '',
      items: Array.isArray(items) ? items : [],
      uuid,
      subtotal,
    };
  });
}
