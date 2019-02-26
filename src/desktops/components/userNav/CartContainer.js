import { h, Component } from 'preact';

export default class CartContainer extends Component {
  constructor(props) {
    super(props);

    this.renderEmpty = this.renderEmpty.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  renderLoading() {
    const { t } = this.props;
    return (
      <div
        className="cart-flyout cart-container load-spinner"
        data-bhw="ShoppingCart"
      >
        <span className="ls-loading-message">{t.cart.loading}</span>
      </div>
    );
  }

  renderError() {
    const { t } = this.props;
    return (
      <div
        className="cart-flyout cart-container ls-widget-error"
        data-bhw="ShoppingCart"
      >
        <span className="ls-loading-message">{t.cart.error}</span>
      </div>
    );
  }

  renderEmpty() {
    const { t, cart } = this.props;
    return (
      <div
        id="ls-header-cart-body"
        className="cart-flyout cart-empty-container"
        data-bhw="ShoppingCart"
        data-bhd={cart.uuid ? `{"uuid":"${cart.uuid}"}` : undefined}
      >
        <div className="cart-empty-body">
          <div className="cart-empty-header">{t.cart.empty}</div>
          <p className="cart-empty-content">
            {t.cart.emptyText} <a href="/goods">{t.cart.goods}</a>.
          </p>
        </div>
      </div>
    );
  }

  renderItem(item) {
    const { deal_uuid, deal_permalink, option_uuid, quantity } = item;
    const bhd = {
      deal_uuid,
      deal_permalink,
      option_uuid,
      option_quantity: quantity,
    };
    return (
      <div
        className="cart-item"
        data-uuid={item.option_uuid}
        data-bhc={`deal_option:${deal_permalink}+${option_uuid}`}
        data-bhd={JSON.stringify(bhd)}
      >
        <div className="cart-cell cart-desc">
          <div className="cart-img">
            <img src={item.url} />
          </div>
          <div className="cart-title">{item.title}</div>
        </div>
        <div className="cart-cell cart-quantity">{item.quantity}</div>
        <div className="cart-cell cart-price">{item.price}</div>
      </div>
    );
  }

  renderItems() {
    const { t, cart, flags } = this.props;
    return (
      <div
        className="cart-flyout cart-container"
        data-bhw="ShoppingCart"
        data-bhd={cart.uuid ? `{"uuid":"${cart.uuid}"}` : undefined}
      >
        <div className="cart-header">
          <div className="cart-cell cart-desc">
            <span className="cart-desc-title">{t.cart.desc}</span>
            <span className="cart-desc-qty">({cart.quantity})</span>
          </div>
          <div className="cart-cell cart-quantity">{t.cart.quantity}</div>
          <div className="cart-cell cart-price">{t.cart.price}</div>
        </div>
        <div className="cart-item-list">{cart.items.map(this.renderItem)}</div>
        <div className="cart-footer">
          <div className="cart-subtotal">
            <div className="subtotal-text">
              {t.cart.subtotal}:<b>{cart.subtotal}</b>
            </div>
          </div>
          <div className="cart-links">
            <a
              href={flags.cartWidgetUrl}
              className="btn btn-small"
              data-bhw="ViewCart"
            >
              {t.cart.view}
            </a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { cart } = this.props;

    let content = null;
    switch (cart.widgetStatus) {
      case 'success':
        if (!cart.items.length) {
          content = this.renderEmpty();
        } else {
          content = this.renderItems();
        }
        break;
      case 'failure':
        content = this.renderError();
        break;
      case 'loading':
        content = this.renderLoading();
        break;
      case 'initial':
      default:
        content = null;
        break;
    }

    return content;
  }
}
