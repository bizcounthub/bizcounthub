import React, { Component } from 'react';
import RecentLocationItem from './RecentLocationItem';

// recent searches
export default class RecentLocations extends Component {
  constructor(props) {
    super(props);

    this.handleClearAllClick = this.handleClearAllClick.bind(this);
  }

  // handle the click of "clear all"
  handleClearAllClick() {
    const { clearAllRecentLocations } = this.props;
    clearAllRecentLocations();
  }

  render() {
    const { recentLocations, t, highlightIndex } = this.props;

    // do not display it if the recent searches data is empty or disabled
    if (!recentLocations.length) {
      return null;
    }

    return (
      <ul data-bhw="recentLocations">
        <li
          className="tw-heading tw-recent-locations r-first-wrap"
          key="location-header"
        >
          {t.search.recentLocations}
          <span
            className="tw-clear"
            ctx="location"
            role="button"
            data-bhw="clearAllBtn"
            onClick={this.handleClearAllClick}
            tabIndex="-1"
          >
            {t.search.clearAll}
          </span>
        </li>
        {recentLocations.map((item, index) => (
          <RecentLocationItem
            key={`recent-location-${item.bhc}`}
            item={item}
            index={index}
            isHighlight={highlightIndex === index + 1}
            {...this.props}
          />
        ))}
      </ul>
    );
  }
}
