import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import classNames from 'classnames';
import { signinFlyoutSelector } from 'app/desktop/selectors/userNav';
import SigninFlyoutForm from './SigninFlyoutForm';
import MyStuffMenu from './MyStuffMenu';
import * as signinFlyoutActions from 'app/desktop/actions/signinFlyout';

export class SignInFlyout extends Component {
  constructor(props) {
    super(props);

    this.handleDocumentKeyup = this.handleDocumentKeyup.bind(this);
    this.handleDocumentActive = this.handleDocumentActive.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentActive);
    document.addEventListener('keyup', this.handleDocumentKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentActive);
    document.removeEventListener('keyup', this.handleDocumentKeyup);
  }

  handleDocumentActive(e) {
    if (
      e.target.closest('.flyout-menu-item, .ls-signin-flyout, .ls-signin-form')
    ) {
      return;
    }

    this.props.hideSigninFlyout();
  }

  handleDocumentKeyup(e) {
    if (e.keyCode === 27) {
      this.props.hideSigninFlyout();
    }
  }

  render() {
    const {
      flags,
      signinFlyout,
      showSigninFlyout,
      hideSigninFlyoutWithDelay,
      user,
    } = this.props;

    if (user) {
      return (
        <MyStuffMenu
          show={signinFlyout.show}
          onMouseOver={showSigninFlyout}
          onMouseOut={hideSigninFlyoutWithDelay}
        />
      );
    }

    return (
      <div
        id="ls-signin-flyout"
        className={classNames(
          {
            'gdpr-signin-flyout': flags.showGDPRSigninFlyout,
            show: signinFlyout.show,
          },
          'sf my-stuff'
        )}
        onMouseOver={showSigninFlyout}
        onMouseOut={hideSigninFlyoutWithDelay}
      >
        <MyStuffMenu />
        <SigninFlyoutForm {...this.props} />
      </div>
    );
  }
}

export default connect(
  signinFlyoutSelector,
  signinFlyoutActions
)(SignInFlyout);
