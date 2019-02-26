/* eslint-disable react/no-unknown-property */

import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bellIconSelector } from 'app/common/selectors/notifications';
import { updateUnViewedCount } from 'app/common/actions/inAppMessages';

class BellIcon extends Component {
  constructor(props) {
    super(props);
    this.mouseEnter = this.mouseEnter.bind(this);
  }

  renderItemCount(unviewedCount) {
    if (unviewedCount <= 0) {
      return null;
    }

    return (
      <div className="item-count">
        {unviewedCount > 99 ? '99+' : unviewedCount.toString()}
      </div>
    );
  }

  mouseEnter() {
    this.props.updateUnViewedCount();
  }

  render() {
    const { t, unviewedCount } = this.props;

    return (
      <span
        id="bell"
        role="button"
        className="ls-h-bell"
        data-bhw="NotificationsInbox"
        aria-haspopup="true"
        aria-owns="ls-inbox-flyout"
        aria-label={t.header.notifications}
        onMouseEnter={this.mouseEnter}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <path
            fill="#FFF"
            d="M10.956 2.049a1.073 1.073 0 0 1-.095-.443C10.861.995 11.371.5 12 .5s1.139.495 1.139 1.106c0 .157-.034.307-.096.443 2.544.358 4.315 2.051 5.37 4.667.804 1.99 1.134 4.342 1.134 6.504 0 1.12.631 2.493 1.633 3.87.813 1.121-.02 2.656-1.408 2.656h-3.909C15.837 21.825 14.117 23.5 12 23.5s-3.838-1.675-3.864-3.754H4.228c-1.388 0-2.221-1.535-1.408-2.657 1.001-1.376 1.633-2.748 1.633-3.87 0-2.16.33-4.513 1.133-6.503 1.056-2.616 2.827-4.31 5.37-4.667zm-.985 17.697c.026 1.078.923 1.944 2.029 1.944 1.105 0 2.003-.866 2.028-1.944H9.971zm7.741-6.526c0-5.252-1.687-9.432-5.712-9.432-4.025 0-5.713 4.18-5.713 9.432 0 1.526-.708 3.128-1.827 4.716h15.08c-1.12-1.59-1.828-3.19-1.828-4.716z"
          />
        </svg>
        {this.renderItemCount(unviewedCount)}
      </span>
    );
  }
}

export default connect(
  bellIconSelector,
  { updateUnViewedCount }
)(BellIcon);
