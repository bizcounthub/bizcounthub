import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { notificationsSelector } from 'app/common/selectors/notifications';
import { markAsViewed } from 'app/common/actions/inAppMessages';
import { markAsViewedRequest } from 'app/common/helpers/inAppMessages';
import BellIcon from 'app/desktop/components/notifications/BellIcon';
import { Messages } from 'app/desktop/components/notifications/Messages';
import EmptyNotifications from 'app/desktop/components/notifications/Empty';

export class Notifications extends Component {
  constructor(props) {
    super(props);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.markMessagesAsViewed = this.markMessagesAsViewed.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
  }

  mouseLeave() {
    this.markMessagesAsViewed();
  }

  markMessagesAsViewed() {
    const { messages } = this.props;
    const messageIds = messages
      .filter(message => message.state === 'unviewed')
      .map(message => message.id);

    if (messageIds.length) {
      this.props.markAsViewed(messageIds);
      markAsViewedRequest(messageIds);
    }
  }

  renderMessages() {
    const { messages } = this.props;
    if (messages.length) {
      return <Messages {...this.props} />;
    }
    return <EmptyNotifications {...this.props} />;
  }

  render() {
    return (
      <div
        id="ls-header-inbox-flyout-container"
        className="notranslate"
        onMouseLeave={this.mouseLeave}
      >
        <BellIcon {...this.props} onMouseLeave={this.mouseLeave} />
        {this.renderMessages()}
      </div>
    );
  }
}
export default connect(
  notificationsSelector,
  {
    markAsViewed,
  }
)(Notifications);
