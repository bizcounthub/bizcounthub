import { h, Component } from 'preact';

export default class FacebookReauthModal extends Component {
  constructor(props) {
    super(props);
    this.handleAuth = this.handleAuth.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.hideFBReauthModal();
  }

  handleAuth() {
    this.props.signInWithFacebook(true);
  }

  render() {
    const { t, signinFlyout, user } = this.props;
    if (!signinFlyout.showFBReauthModal || user) {
      return null;
    }

    return (
      <div id="ls-fb-auth-modal" className="modal ls-social-modal show-modal">
        <div className="modal-body">
          <div>
            <div className="fb-reauth" data-bhw="FacebookReauth">
              <div className="row">
                <div className="text-center">
                  <div role="heading" className="section-title">
                    {t.signinFlyout.fbReauthTitle}
                  </div>
                </div>
                <p>{t.signinFlyout.fbReauthDesc}</p>
              </div>
              <div className="row text-center">
                <button className="btn" id="fb-auth" onClick={this.handleAuth}>
                  {t.signinFlyout.fbReauthButton}
                </button>
                <a
                  className="close-modal"
                  id="fb-auth-close"
                  onClick={this.handleClose}
                >
                  {t.signinFlyout.fbReauthClose}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
