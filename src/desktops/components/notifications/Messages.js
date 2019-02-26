import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { markAsClickedRequest } from 'app/common/helpers/inAppMessages';
import { notificationsSelector } from 'app/common/selectors/notifications';
import TimeAgo from 'app/common/components/TimeAgo';
import { getTimeAgo, getRelativeTime } from 'app/desktop/helpers/time';

export class Messages extends Component {
  constructor(props) {
    super(props);
    const lang = I18n.lang;

    getTimeAgo(lang).then(timeAgoConfig => {
      Object.assign(this, { timeAgoConfig });
      this.forceUpdate();
    });

    this.handleMessageClick = this.handleMessageClick.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  redirect(message) {
    window.location.href = message.url;
    if (message.url.includes('#')) {
      window.location.reload();
    }
  }

  handleMessageClick(e, message) {
    e.preventDefault();
    return markAsClickedRequest(message.id)
      .then(() => {
        this.redirect(message);
      })
      .catch(() => {
        this.redirect(message);
      });
  }

  renderNotification(notification) {
    const {
      id,
      url,
      bhd,
      state,
      title,
      message,
      startAt,
      started,
      imageUrl,
    } = notification;

    const { timeAgoConfig } = this;
    const time = getRelativeTime(started, timeAgoConfig);

    return (
      <div
        className={`ls-inbox-item ls-inbox-item-${state}`}
        data-id={id}
        data-bhd={bhd}
        data-bhc={`notification:${id}`}
        aria-label={title}
        href={url}
        role="button"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
        onClick={e => this.handleMessageClick(e, notification)}
      >
        <div className="ls-inbox-item-title" role="heading">
          {title}
        </div>
        <div className="ls-inbox-item-msg">{message}</div>
        <div className="ls-inbox-item-time" data-start={startAt}>
          <TimeAgo time={time} />
        </div>
      </div>
    );
  }

  renderContent() {
    const { messages, loading } = this.props;
    if (loading) {
      return (
        <div
          className="gig-crawler"
          style="position: absolute; top: 50%; left: 50%"
        >
          <div />
          <div />
          <div />
        </div>
      );
    }

    return messages.map(notification => this.renderNotification(notification));
  }

  render() {
    return (
      <div
        id="ls-inbox-flyout"
        className="ls-inbox-flyout ls-prompt inbox-flyout"
        data-bhw="inbox"
        aria-labelledby="bell"
      >
        <div className="ls-inbox-list">{this.renderContent()}</div>
      </div>
    );
  }
}

export default connect(notificationsSelector)(Messages);
