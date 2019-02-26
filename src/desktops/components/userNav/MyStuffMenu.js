import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import classNames from 'classnames';
import { myStuffMenuItemsSelector } from 'app/desktop/selectors/userNav';
import { signOut } from 'app/common/actions/auth';

export class MyStuffMenu extends Component {
  constructor(props) {
    super(props);

    this.shouldRenderSelect = this.shouldRenderSelect.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
    this.renderMenuItem = this.renderMenuItem.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldRenderSelect() {
    const { user, signinFlyout, app } = this.props;
    if (!user || !signinFlyout.showSelectFlyout || !app.brand.isGroupon) {
      return false;
    }
    return true;
  }

  handleClick(e, item) {
    if (item.id === 'sign-out') {
      this.props.signOut();
    }
  }

  renderMenuItem(item) {
    const { id, url, bhw, type, text, icon, iconClass, className } = item;

    if (type === 'separator') {
      return <div role="separator" className="my-stuff-item-separator" />;
    }

    let content = null;
    if (type === 'primary') {
      content = <span className="primary-link-text">{text}</span>;
    } else {
      content = item.text;
    }

    return (
      <a
        role="menuitem"
        id={id}
        href={url}
        key={id}
        data-bhw={bhw}
        className={classNames(
          'my-stuff-item',
          className,
          `my-stuff-item-${item.type}`,
          iconClass
        )}
        onClick={e => this.handleClick(e, item)}
      >
        {icon}
        {content}
      </a>
    );
  }

  renderMenuItems() {
    const { myStuffMenuItems } = this.props;

    return myStuffMenuItems.map(this.renderMenuItem);
  }

  renderSelect() {
    const { app } = this.props;
    if (!this.shouldRenderSelect()) {
      return null;
    }

    return (
      <a
        href="/programs/select?utm_source=merchandising_&utm_medium=header&utm_campaign=enrollmentfirstround"
        className="sf-select-link"
        data-bhw="SelectFlyout"
      >
        <img src={app.assets.selectFlyout} />
      </a>
    );
  }

  render() {
    const { t, user, show } = this.props;
    return (
      <div
        id={user ? 'ls-my-stuff' : ''}
        className={classNames({
          'my-stuff sf signed-in': user,
          'sf-links': !user,
          'sf-has-select': this.shouldRenderSelect(),
          show,
        })}
        role="menu"
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
      >
        <span className="ax-hidden" id="user-menu-description">
          {t.userNav.userHeadline}
        </span>
        {this.renderSelect()}
        <div className="sf-my-stuff-right">{this.renderMenuItems()}</div>
      </div>
    );
  }
}

export default connect(
  myStuffMenuItemsSelector,
  { signOut }
)(MyStuffMenu);
