import React, { Component } from 'react';
import AutocompleteItem from './AutocompleteItem';

/**
 * The recent location item
 */
export default class RecentLocationItem extends Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  // click suggest item
  handleItemClick() {
    const { item, searchByLocation, closeSearch } = this.props;
    searchByLocation(item.raw, true);
    closeSearch();
  }

  render() {
    const { t, item, index, removeRecentLocation, isHighlight } = this.props;
    return (
      <AutocompleteItem
        t={t}
        id={`twr${index}`}
        isHighlight={isHighlight}
        className="tw-recent"
        canBeRemoved
        attrs={{
          id: `twr${index}`,
          'data-bhc': item.bhc,
          'data-value': item.address,
          'data-lat': item.lat,
          'data-lng': item.lng,
          'data-division': item.division,
        }}
        onClick={this.handleItemClick}
        onRemove={() => removeRecentLocation(index)}
      >
        {item.formatted || item.address}
      </AutocompleteItem>
    );
  }
}
