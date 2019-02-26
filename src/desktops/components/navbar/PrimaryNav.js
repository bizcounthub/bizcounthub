import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import throttle from 'lodash/throttle';
import stickyHeader from 'app/desktop/helpers/stickyHeader';
import { primaryNavSelector } from 'app/desktop/selectors/navbar';
import * as navbarActions from 'app/desktop/actions/navbar';
import DoubleTouchLink from 'app/desktop/components/common/DoubleTouchLink';

class PrimaryNav extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOverItem = this.handleMouseOverItem.bind(this);
    this.handleMouseOutItem = this.handleMouseOutItem.bind(this);
    this.handleTouchItem = this.handleTouchItem.bind(this);
    this.handleResize = throttle(this.handleResize.bind(this), 250);
  }

  componentDidMount() {
    stickyHeader.init();
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.props.updateTabsBound();
  }

  handleMouseOverItem(key) {
    this.props.activatePrimaryTab(key);
  }

  handleMouseOutItem() {
    this.props.deactivatePrimaryTab();
  }

  handleMouseOver() {
    const { activeTab } = this.props;
    if (activeTab) {
      this.handleMouseOverItem(activeTab);
    }
  }

  handleTouchItem(item) {
    const { activeTab, deactivatePrimaryTab, activatePrimaryTab } = this.props;
    const { key } = item;

    if (activeTab && key === activeTab) {
      deactivatePrimaryTab();
    } else {
      activatePrimaryTab(key);
    }
  }

  renderItem(item) {
    const { key, bhw, campaign, url, label, haspopup } = item;
    return (
      <li
        key={key}
        id={`${key}-tab`}
        className="primary-nav-tab"
        data-bhw={bhw}
      >
        <DoubleTouchLink
          href={url}
          id={`${key}-tab-link`}
          data-id={key}
          data-bhc={campaign ? `${bhw}:${campaign}` : undefined}
          role={haspopup ? 'menuitem' : undefined}
          aria-haspopup={haspopup ? 'true' : undefined}
          aria-owns={haspopup ? `subnav-${key}-tab` : undefined}
          tabIndex={haspopup ? '0' : undefined}
          onMouseOver={() => this.handleMouseOverItem(key)}
          onMouseEnter={() => this.handleMouseOverItem(key)}
          onMouseOut={this.handleMouseOutItem}
          onMouseLeave={this.handleMouseOutItem}
          shouldDoubleTouch={() => item.haspopup}
          onTouch={() => this.handleTouchItem(item)}
        >
          {label}
        </DoubleTouchLink>
      </li>
    );
  }

  render() {
    const { primary } = this.props;

    return (
      <div
        id="ls-primary-nav-row"
        className="page-container notranslate ls-primary-nav-loaded"
      >
        <ul
          id="primary-nav"
          className="primary-nav"
          role="menubar"
          onMouseOver={this.handleMouseOver}
          onMouseEnter={this.handleMouseOver}
          onMouseOut={this.handleMouseOutItem}
          onMouseLeave={this.handleMouseOutItem}
        >
          {primary.map(this.renderItem)}
        </ul>
      </div>
    );
  }
}

export default connect(
  primaryNavSelector,
  navbarActions
)(PrimaryNav);
