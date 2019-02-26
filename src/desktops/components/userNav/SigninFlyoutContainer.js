import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { signinFlyoutSelector } from 'app/desktop/selectors/userNav';
import { appendReturnTo } from 'app/common/helpers/url';
import * as signinFlyoutActions from 'app/desktop/actions/signinFlyout';
import DoubleTouchLink from 'app/desktop/components/common/DoubleTouchLink';
import SigninFlyout from './SignInFlyout';
import FacebookReauthModal from './FacebookReauthModal';

export class SigninFlyoutContainer extends Component {
  constructor(props) {
    super(props);
    this.renderLink = this.renderLink.bind(this);
    this.handleToggleFlyout = this.handleToggleFlyout.bind(this);
  }

  componentDidMount() {
    window.addEventListener('changestate', () => {
      this.forceUpdate(); // update referrer of the urls
    });
  }

  handleToggleFlyout() {
    const { signinFlyout, showSigninFlyout, hideSigninFlyout } = this.props;
    if (signinFlyout.show) {
      hideSigninFlyout();
    } else {
      showSigninFlyout();
    }
  }

  renderLink() {
    const {
      t,
      showSigninFlyout: show,
      hideSigninFlyoutWithDelay: hide,
      user,
    } = this.props;
    if (!user) {
      return (
        <DoubleTouchLink
          className="user-menu-item user-menu-action"
          rel="nofollow"
          data-bhw="UserSignIn"
          aria-haspopup="true"
          href={appendReturnTo('/login')}
          onMouseOver={show}
          onMouseOut={hide}
          onTouch={this.handleToggleFlyout}
        >
          {t.signinFlyout.linkText}
        </DoubleTouchLink>
      );
    }
    return (
      <DoubleTouchLink
        className="user-menu-item user-menu-action user-name"
        id="user-name"
        data-bhw="UserName"
        href="/mystuff"
        rel="nofollow"
        aria-haspopup="true"
        data-bhw-path="Header|UserName"
        onMouseOver={show}
        onMouseOut={hide}
        onTouch={this.handleToggleFlyout}
      >
        <span className="icon-arrow-down-large">
          {user.nameTruncated || user.firstName}
        </span>
      </DoubleTouchLink>
    );
  }

  render() {
    const { hideSigninFlyoutForResponsive } = this.props;

    // Do not show it if it's in responsive mode,
    // and the page width less than 960px
    if (hideSigninFlyoutForResponsive) {
      return null;
    }

    return (
      <div id="signup-container" className="signup-container notranslate">
        {this.renderLink()}
        <SigninFlyout />
        <FacebookReauthModal {...this.props} />
      </div>
    );
  }
}

export default connect(
  signinFlyoutSelector,
  signinFlyoutActions
)(SigninFlyoutContainer);
