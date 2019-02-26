import { h, Component } from 'preact';

export default class EmptyNotifications extends Component {
  renderSignin(props) {
    const { t, auth } = props;
    if (auth.isAuthenticated) {
      return null;
    }
    return (
      <div className="ls-inbox-no-account-section" data-bhw="noAccount">
        <p>{t.notifications.emptyMessage}</p>
        <a
          className="t-button btn btn-signin referrer-link"
          href="/login"
          data-bhw="signIn"
          role="button"
        >
          {t.notifications.signIn}
        </a>
        <span>{t.notifications.noAccountYet}</span>{' '}
        <a
          className="ls-inbox-sign-up-link referrer-link"
          href="/signup"
          data-bhw="signUp"
        >
          {t.notifications.signUp}
        </a>
      </div>
    );
  }

  render() {
    const { t } = this.props;
    return (
      <div
        id="ls-inbox-flyout"
        className="ls-inbox-flyout ls-prompt inbox-flyout"
        data-bhw="inbox"
        aria-labelledby="bell"
      >
        <div
          className="ls-inbox-list  ls-pane-content ls-inbox-list-no-messages"
          data-bhw="list"
        >
          <div className="ls-inbox-no-messages" data-bhw="noMessages">
            <span className="ls-inbox-small-bell" role="presentation" />
            <div className="ls-inbox-no-messages-title" role="heading">
              {t.notifications.emptyHeader}
            </div>
            {this.renderSignin(this.props)}
          </div>
        </div>
      </div>
    );
  }
}
