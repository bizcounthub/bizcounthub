import { h, Component } from 'preact';
import { loadScript } from 'app/common/helpers/page';
import { executeOnIntersection } from 'app/common/helpers/intersectionObserver';

export default class FacebookSigninButton extends Component {
  constructor(props) {
    super(props);
    this.fbLoaded = false;

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { user } = this.props;
    const { locale } = window.I18n;

    // do not load it for signed in user
    if (user) {
      return;
    }

    const fn = () =>
      loadScript(
        `https://connect.facebook.net/${locale}/sdk.js`,
        'facebook-jssdk'
      )
        .then(() => {
          this.fbLoaded = true;
        })
        .catch(() => {});
    executeOnIntersection(document.getElementById('ls-btn-facebook'), fn);
  }

  handleClick(e) {
    e.preventDefault();
    const { signInWithFacebook } = this.props;
    if (!this.fbLoaded) {
      return;
    }

    signInWithFacebook();
  }

  render() {
    return (
      <button
        className="btn btn-facebook icon-facebook"
        id="ls-btn-facebook"
        tabIndex="0"
        type="button"
        data-bhw="FacebookLogin"
        onClick={this.handleClick}
      >
        Facebook
      </button>
    );
  }
}
