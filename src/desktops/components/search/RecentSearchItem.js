import React, { Component } from 'react';
import classNames from 'classnames';
import AutocompleteItem from './AutocompleteItem';

/**
 * The recent search item
 */
export default class RecentSearchItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleting: false,
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  // click suggest item
  handleItemClick() {
    const { item, searchByDeal, closeSearch } = this.props;
    searchByDeal(item.raw, true);
    closeSearch();
  }

  renderSubValue(item) {
    if (!item.subValue) {
      return null;
    }
    return <span className="typeahead-category"> {item.subValue}</span>;
  }

  renderSearchSvg() {
    const enableSearchIcon =
      this.props.app.country === 'US' || this.props.enableSearchIcon;
    if (!enableSearchIcon) {
      return null;
    }
    return (
      <svg
        className="recent-search-icon"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <g fill="none" fill-rule="evenodd">
          <rect width="18" height="18" rx="9" />
          <path
            stroke="#FFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.27 10.87l1.927 1.906-1.927-1.907a3.28 3.28 0 0 1-2.074.737c-1.834 0-3.321-1.507-3.321-3.366 0-1.858 1.487-3.365 3.321-3.365s3.321 1.507 3.321 3.365a3.376 3.376 0 0 1-1.247 2.63z"
          />
        </g>
      </svg>
    );
  }

  render() {
    const {
      item,
      truncate,
      index,
      t,
      removeRecentSearch,
      isHighlight,
    } = this.props;
    return (
      <AutocompleteItem
        canBeRemoved
        t={t}
        isHighlight={isHighlight}
        className="tw-recent"
        linkClassName={classNames({ 'truncated-rvd-item': truncate })}
        attrs={{
          'data-bhc': item.bhc,
          'data-value': item.value,
        }}
        id={`tw-${index}`}
        onClick={this.handleItemClick}
        onRemove={() => removeRecentSearch(index)}
      >
        {this.renderSearchSvg()}
        {item.value}
        {this.renderSubValue(item)}
      </AutocompleteItem>
    );
  }
}
