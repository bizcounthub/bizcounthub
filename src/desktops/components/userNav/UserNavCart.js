import { h, Component } from 'preact';
import CartContainer from './CartContainer';

export default class UserNavCart extends Component {
  constructor(props) {
    super(props);

    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver() {
    const { cart, loadCartWidget } = this.props;
    if (cart.widgetStatus === 'loading' || cart.widgetStatus === 'success') {
      return;
    }

    loadCartWidget();
  }

  render() {
    const { t, flags, cart } = this.props;
    const { showCart, cartWidgetUrl } = flags;

    if (!showCart) {
      return null;
    }

    let content = null;

    if (cart.size > 0) {
      content = [
        <span className="cart-text" key="cart-text">
          {t.cart.desc} ({cart.quantity})
        </span>,
        <span className="cart-count" key="cart-count">
          {cart.size}
        </span>,
      ];
    } else {
      content = t.header.cart;
    }

    return (
      <span
        id="ls-header-cart-link"
        className={`user-menu-item cart-widget ls-cart-size-${cart.sizeStatus}`}
        data-bhw="CartWidget"
      >
        <a
          href={cartWidgetUrl}
          id="ls-cart-link"
          className="cart-link icon-goods"
          rel="nofollow"
          onMouseOver={this.handleMouseOver}
        >
          {content}
        </a>
        <CartContainer {...this.props} />
      </span>
    );
  }
}
