import { h, Component } from 'preact';
import { loadScript } from 'app/common/helpers/page';
import { trackEvent } from 'app/common/helpers/track';
import { executeOnIntersection } from 'app/common/helpers/intersectionObserver';

function loadGapi() {
  return new Promise(resolve =>
    loadScript('https://apis.google.com/js/api.js', 'google-jssdk').then(() =>
      window.gapi.load('auth2', resolve)
    )
  );
}

export default class GoogleSigninButton extends Component {
  constructor(props) {
    super(props);
    this.googleButton = null;
    this.gapiLoaded = false;
    this.gapiInited = false;

    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleFailure = this.handleFailure.bind(this);
    this.initGapi = this.initGapi.bind(this);
  }

  componentDidMount() {
    const { user } = this.props;
    // do not load it for signed in user
    if (user) {
      return;
    }
    const fn = () => loadGapi().then(this.initGapi);
    executeOnIntersection(document.getElementById('ls-btn-google'), fn);
  }

  initGapi() {
    if (this.gapiInited || !this.googleButton) {
      return;
    }

    const { app } = this.props;
    const { googleClientId } = app;
    window.gapi.auth2
      .init({
        client_id: googleClientId,
      })
      .attachClickHandler(
        this.googleButton,
        {},
        this.handleSuccess,
        this.handleFailure
      );
    this.gapiInited = true;
  }

  handleSuccess(googleUser) {
    this.props.signInWithGoogle(googleUser);
  }

  handleFailure(error) {
    trackEvent('google-signin-popup-closed', { error });
  }

  render() {
    return (
      <button
        className="btn btn-google-plus icon-google-plus"
        id="ls-btn-google"
        tabIndex="0"
        type="button"
        data-bhw="GoogleLogin"
        // onClick={this.initGapi}
        // onFocus={this.handleFocus}
        // onBlur={this.handleBlur}
        ref={c => {
          this.googleButton = c;
        }}
      >
        Google
      </button>
    );
  }
}
