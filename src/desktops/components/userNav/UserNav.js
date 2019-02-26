import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import classNames from 'classnames';
import { userNavSelector } from 'app/desktop/selectors/userNav';
import { loadCartWidget } from 'app/common/actions/cart';
import { appendReturnTo } from 'app/common/helpers/url';
import { getC } from 'app/common/helpers/cookie';
import DoubleTouchLink from 'app/desktop/components/common/DoubleTouchLink';
import UserNavCart from './UserNavCart';
import LanguageSelector from './LanguageSelector';
import MyStuffMenu from './MyStuffMenu';

let responsiveMenuInited;
export class UserNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showUserMenu: false,
    };

    this.shouldRenderUserMenu = this.shouldRenderUserMenu.bind(this);
    this.renderUserMenu = this.renderUserMenu.bind(this);
    this.renderSignInLink = this.renderSignInLink.bind(this);
    this.renderSignUpLink = this.renderSignUpLink.bind(this);
    this.renderWishlist = this.renderWishlist.bind(this);
    this.renderMyStuffMenu = this.renderMyStuffMenu.bind(this);
    this.showUserMenu = this.showUserMenu.bind(this);
    this.toggleUserMenu = this.toggleUserMenu.bind(this);
    this.handleDocumentTouch = this.handleDocumentTouch.bind(this);
  }

  componentDidMount() {
    window.addEventListener('changestate', () => {
      this.forceUpdate(); // update referrer of the urls
    });
    document.addEventListener('touchend', this.handleDocumentTouch);

    if (this.props.user) {
      this.initResponsiveMenu();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('touchend', this.handleDocumentTouch);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.isAuthenticated !== this.props.auth.isAuthenticated) {
      this.initResponsiveMenu();
    }
  }

  handleDocumentTouch(e) {
    if (e.target.closest('#ls-my-stuff')) {
      return;
    }

    this.showUserMenu(false);
  }

  showUserMenu(show) {
    this.setState({
      showUserMenu: show,
    });
  }

  toggleUserMenu() {
    this.setState({
      showUserMenu: !this.state.showUserMenu,
    });
  }

  initResponsiveMenu() {
    const { isLegacyResponsive } = Groupon.PageFlags || {};
    if (
      isLegacyResponsive &&
      Groupon.LS.responsiveMenu &&
      !responsiveMenuInited
    ) {
      responsiveMenuInited = true;
      setTimeout(() => {
        Groupon.LS.responsiveMenu();
      }, 100);
    }
  }

  shouldRenderUserMenu() {
    const { flags, user, hideSigninFlyoutForResponsive } = this.props;
    const { showLiteHeader } = flags;
    if (!user) {
      return false;
    }

    // show it for lite header
    // show it for responsive (less than 960px)
    return showLiteHeader || hideSigninFlyoutForResponsive;
  }

  renderUserMenu() {
    if (!this.shouldRenderUserMenu()) {
      return null;
    }
    const { user } = this.props;

    return (
      <DoubleTouchLink
        id="user-name"
        data-bhw="UserName"
        href="/mystuff"
        rel="nofollow"
        aria-haspopup="true"
        aria-describedby="user-menu-description"
        data-user-name={user.firstName}
        className="user-menu-item user-name"
        onTouch={this.toggleUserMenu}
        onMouseOver={() => this.showUserMenu(true)}
        onMouseOut={() => this.showUserMenu(false)}
      >
        <span className="icon-arrow-down-large">
          {user.nameTruncated || user.firstName}
        </span>
      </DoubleTouchLink>
    );
  }

  renderSignInLink() {
    const { t, flags, user, hideSigninFlyoutForResponsive } = this.props;
    if (user || !(flags.showLiteHeader || hideSigninFlyoutForResponsive)) {
      return null;
    }

    return (
      <a
        className="user-menu-item"
        id="ls-user-signin"
        data-bhw="UserSignIn"
        rel="nofollow"
        href={appendReturnTo('/login')}
      >
        {t.userNav.signIn}
      </a>
    );
  }

  renderWishlist() {
    const { t, flags, user } = this.props;
    if (!user || !flags.showWishlist) {
      return null;
    }

    return (
      <a
        id="header-wishlist-heart"
        data-bhw="Wishlists"
        href="/wishlist"
        className="icon-heart-filled user-menu-item"
        rel="nofollow"
      >
        {t.userNav.myWishlist}
      </a>
    );
  }

  renderSignUpLink() {
    const { t, user } = this.props;
    if (user) {
      return null;
    }
    return (
      <a
        className="user-menu-item"
        rel="nofollow"
        id="ls-user-signup"
        data-bhw="UserSignUp"
        href={appendReturnTo('/signup')}
      >
        {t.userNav.signUp}
      </a>
    );
  }

  renderMyStuffMenu() {
    if (!this.shouldRenderUserMenu()) {
      return null;
    }

    return <MyStuffMenu show={this.state.showUserMenu} />;
  }

  render() {
    const { t, user } = this.props;

    return (
      <nav
        className={classNames('user-menu notranslate', {
          'signed-out': !user,
          'signed-in': user,
        })}
      >
        <a
          href="/occasion/recently-viewed-deals" // FIXME: why is this hardcoded?
          id="ls-rvd-link"
          data-bhw="RecentlyViewedDeals"
          className={classNames(
            {
              'ls-hide': !getC(),
            },
            'responsive-hide-500 icon-view user-menu-item'
          )}
          rel="nofollow"
        >
          {t.userNav.recentlyViewedDeals}
        </a>

        {this.renderWishlist()}

        <UserNavCart {...this.props} />
        <a
          id="user-merchant"
          className="user-menu-item user-merchant"
          data-bhw="user-merchant-link"
          rel="nofollow"
          href={t.links.headerMerchantLink}
        >
          {t.userNav.headerMerchant}
        </a>
        <a
          id="user-help"
          className="responsive-hide-500 user-menu-item user-help"
          href={t.links.helpLink}
          data-bhw="user-help-link"
        >
          {t.userNav.help}
        </a>
        <LanguageSelector {...this.props} />
        {this.renderSignInLink()}
        {this.renderSignUpLink()}
        {this.renderUserMenu()}
        {this.renderMyStuffMenu()}
      </nav>
    );
  }
}

export default connect(
  userNavSelector,
  { loadCartWidget }
)(UserNav);
