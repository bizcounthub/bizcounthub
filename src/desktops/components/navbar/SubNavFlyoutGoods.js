import { h, Component } from 'preact';
import classNames from 'classnames';
import DoubleTouchLink from 'app/desktop/components/common/DoubleTouchLink';

const CATEGORY_COUNT_THRESHOLD = 11;
const LONG_CATEGORY_COUNT = 8;
const SHORT_CATEGORY_COUNT = 6;

export default class SubNavItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };

    this.renderSubItems = this.renderSubItems.bind(this);
    this.renderFlatLinks = this.renderFlatLinks.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
    this.renderCategoryMessage = this.renderCategoryMessage.bind(this);
  }

  componentDidMount() {
    Groupon.Utils.lazyLoadImages('.lazy-load');
  }

  renderSubItems(items) {
    const { noFollowSubNavLinks } = this.props.flags;

    return items.map(({ id, url, name, count, label }) => (
      <a
        href={url}
        rel={noFollowSubNavLinks ? 'nofollow' : undefined}
        key={`subitem-${id}`}
        role="menuitem"
        tabIndex="-1"
        data-count={count}
        data-descr={label}
      >
        {name}
      </a>
    ));
  }

  renderFlatLinks() {
    const { flyout, flags } = this.props;
    const { flatLinks } = flyout;
    const { noFollowSubNavLinks } = flags;
    return flatLinks.map(({ id, name, count, url }, i) => (
      <li
        className={classNames({ flyFlatLinkFirst: i === 0 }, 'flyFlatLink')}
        key={`flatlink-${id}`}
      >
        <a
          className="flyFlatLink"
          rel={noFollowSubNavLinks ? 'nofollow' : undefined}
          href={url}
          data-bhc={`flyout-label:${id}`}
          role="menuitem"
          tabIndex="-1"
          data-count={count}
        >
          <n>{name}</n>
        </a>
      </li>
    ));
  }

  renderCategories() {
    const { flyout, flags } = this.props;
    const { categories } = flyout;
    const { noFollowSubNavLinks } = flags;

    const categoryItems = categories.map((category, index) => {
      const {
        id,
        name,
        title,
        url,
        count,
        imgUrl,
        imgThreshold,
        children,
      } = category;

      const categoriesPerColumn =
        children.length < CATEGORY_COUNT_THRESHOLD
          ? SHORT_CATEGORY_COUNT
          : LONG_CATEGORY_COUNT;
      const hasRight = children.length > categoriesPerColumn;
      const showImage =
        imgUrl && imgThreshold && children.length <= imgThreshold;
      return (
        <li
          key={`category-${id}`}
          className={classNames('', {
            flyActive: index === this.state.activeIndex,
          })}
          onMouseOver={() => {
            this.setState({
              activeIndex: index,
            });
          }}
        >
          <DoubleTouchLink
            className="flyMenulink"
            rel={noFollowSubNavLinks ? 'nofollow' : undefined}
            href={url}
            data-bhc={`flyout-label:${id}`}
            role="menuitem"
            data-count={count}
            tabIndex="-1"
            onTouch={() => {
              this.setState({
                activeIndex: index,
              });
            }}
          >
            <n>{name}</n>
          </DoubleTouchLink>
          <div data-bhc={`flyout-content:${id}`} className="flyContent">
            <div role="heading">
              <a
                href={url}
                rel={noFollowSubNavLinks ? 'nofollow' : undefined}
                role="menuitem"
                tabIndex="-1"
              >
                {title}
              </a>
            </div>
            <div className="ls-flex-wrap">
              <div className="flyCol50">
                {this.renderSubItems(children.slice(0, categoriesPerColumn))}
              </div>
              {hasRight && (
                <div className="flyCol50">
                  {this.renderSubItems(children.slice(categoriesPerColumn))}
                </div>
              )}
            </div>
            {showImage && (
              <img className="flyBg lazy-load" data-src={imgUrl} alt={name} />
            )}
          </div>
        </li>
      );
    });

    return categoryItems;
  }

  renderCategoryMessage() {
    const { flyout } = this.props;
    const { categoryMessage } = flyout;

    if (!categoryMessage) {
      return null;
    }

    const {
      freeShippingMessage,
      freeReturnsMessage,
      freeShippingDetails,
    } = categoryMessage;

    return (
      <div className="flyTeaserMsg">
        {freeShippingMessage && <span>{freeShippingMessage}</span>}
        {freeShippingMessage && ` ${freeShippingDetails} | `}
        <span>{freeReturnsMessage}</span>
      </div>
    );
  }

  render() {
    return (
      <div data-bhw="goods-flyout" className="flyContainer">
        <ul className="flyMenu">
          {this.renderCategories()}
          {this.renderFlatLinks()}
        </ul>
        {this.renderCategoryMessage()}
      </div>
    );
  }
}
