import React, { Component } from 'react';
import AutocompleteItem from './AutocompleteItem';

/**
 * The suggestion item for location
 */
export default class LocationSuggestionItem extends Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  // click suggest item
  handleItemClick() {
    const { item, searchByLocation, closeSearch } = this.props;
    searchByLocation(item.raw);
    closeSearch();
  }

  render() {
    const {
      t,
      item,
      index,
      isHighlight,
      isMatch,
      onMouseOver,
      onMouseOut,
    } = this.props;

    return (
      <AutocompleteItem
        t={t}
        isHighlight={isHighlight}
        isMatch={isMatch}
        attrs={{
          'data-bhc': item.bhc,
          'data-value': item.address,
          'data-place_id': item.locationId,
          'data-lat': item.lat,
          'data-lng': item.lng,
          'data-division': item.division,
        }}
        id={`tw-${index}`}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={this.handleItemClick}
      >
        {item.formatted}
      </AutocompleteItem>
    );
  }
}
