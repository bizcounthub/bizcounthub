import React, { Component } from 'react';
import DealSuggestionsContainer from './DealSuggestionsContainer';
import RecentSearchItem from './RecentSearchItem';

/**
 * The default suggestions of the deal search
 */
export default class DealDefaultSuggestions extends Component {
  constructor(props) {
    super(props);

    this.renderBody = this.renderBody.bind(this);
    this.handleClearAllClick = this.handleClearAllClick.bind(this);
  }

  // handle the click of "clear all"
  handleClearAllClick() {
    const { clearAllRecentSearches } = this.props;
    clearAllRecentSearches();
  }

  renderBody(highlightIndex) {
    const { recentSearches, t, enableSearchIcon } = this.props;
    return (
      <ul data-bhw="recentSearches">
        <li
          className="tw-heading tw-recent-searches"
          key="recent-searches-header"
        >
          {t.search.recentSearches}
          <span
            className="tw-clear"
            ctx="deal"
            role="button"
            onClick={this.handleClearAllClick}
            data-bhw="clearAll"
            tabIndex="-1"
          >
            {t.search.clearAll}
          </span>
        </li>
        <ul>
          {recentSearches.map((item, index) => (
            <RecentSearchItem
              key={`recent-search-${item.bhc}`}
              item={item}
              index={index}
              isHighlight={highlightIndex === index}
              {...this.props}
              enableSearchIcon={enableSearchIcon}
            />
          ))}
        </ul>
      </ul>
    );
  }

  render() {
    const {
      recentSearches,
      keyword,
      searchByDeal,
      prefillDeal,
      closeSearch,
    } = this.props;

    // do not display it if the recent searches data is empty or disabled
    if (!recentSearches.length) {
      return null;
    }

    return (
      <DealSuggestionsContainer
        defaultHighlightIndex={-1}
        keyword={keyword}
        suggestions={recentSearches}
        renderBody={this.renderBody}
        searchByDeal={searchByDeal}
        prefillDeal={prefillDeal}
        closeSearch={closeSearch}
      />
    );
  }
}
