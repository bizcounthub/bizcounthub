import { h, Component } from 'preact';

export default class SubNavFlyoutItem extends Component {
  constructor(props) {
    super(props);

    this.renderColumn = this.renderColumn.bind(this);
    this.renderLink = this.renderLink.bind(this);
    this.renderCards = this.renderCards.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.flyout.navbarCards !== prevProps.flyout.navbarCards) {
      Groupon.Utils.lazyLoadImages('.lazy-load');
    }
  }

  renderLink(link) {
    const { noFollowSubNavLinks } = this.props.flags;
    const { id, tab, name, count, url, newBadge, newBadgeText } = link;

    return (
      <a
        className="subnav-link"
        href={url}
        rel={noFollowSubNavLinks ? 'nofollow' : undefined}
        data-bhc={id ? `category:${tab}-${id}` : undefined}
        role="menuitem"
        tabIndex="-1"
        data-count={count}
      >
        {name}
        {newBadge && <span className="new-badge">{newBadgeText}</span>}
      </a>
    );
  }

  renderCards() {
    const { flyout } = this.props;
    const { columns = [], navbarCards } = flyout;
    const cardsSize = 4 - columns.length;
    if (!navbarCards || cardsSize <= 0) {
      return null;
    }

    const { id, name, cards } = navbarCards;

    return (
      <div
        className="flyout-column subnav-cards"
        data-bhc={`compound:${id}`}
        data-bhd={JSON.stringify({ cardUUID: id, cardName: name })}
        data-bhw="CompoundCollection"
      >
        {cards.slice(0, cardsSize).map(card => (
          <a
            key={`card-${card.id}`}
            href={card.url}
            data-bhc={`collection:${card.id}`}
            data-bhd={JSON.stringify({
              cardUUID: card.id,
              cardName: card.name,
            })}
            role="menuitem"
            tabIndex="-1"
          >
            <img
              className="subnav-card lazy-load"
              alt={card.url}
              data-src={card.imgUrl}
            />
          </a>
        ))}
      </div>
    );
  }

  renderColumn(column, i) {
    return (
      <div className="flyout-column subnav-categories" key={`column-${i}`}>
        {column.map(this.renderLink)}
      </div>
    );
  }

  renderCouponsOverride() {
    const { flyout, flags } = this.props;
    const { couponsSubnavLinks } = flyout;
    const { noFollowSubNavLinks } = flags;

    return (
      <ul className="ls-coupons-override" role="menu">
        {couponsSubnavLinks.map((link, i) => (
          <li className="ls-coupons-override-link" key={`override-link-${i}`}>
            <a
              className="subnav-link"
              href={link.url}
              rel={noFollowSubNavLinks ? 'nofollow' : undefined}
              data-bhc={`category:coupons-${link.bhc || link.text}`}
              role="menuitem"
              tabIndex="-1"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { flyout } = this.props;
    const { columns, couponsSubnavLinks } = flyout;

    if (couponsSubnavLinks) {
      return this.renderCouponsOverride();
    }

    return (
      <div className="ls-flex-wrap">
        {columns.map(this.renderColumn)}
        {this.renderCards()}
      </div>
    );
  }
}
