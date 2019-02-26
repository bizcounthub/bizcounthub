import React, { Component } from 'react';
import AutocompleteItem from './AutocompleteItem';

/**
 * The suggestion item for deal search
 */
export default class DealSuggestionItem extends Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  // click suggest item
  handleItemClick() {
    const { item, searchByDeal, closeSearch } = this.props;
    searchByDeal(item.raw);
    closeSearch();
  }

  renderSubValue(item) {
    if (!item.subValue) {
      return null;
    }
    return <span className="typeahead-category"> {item.subValue}</span>;
  }

  render() {
    const {
      item,
      index,
      t,
      isHighlight,
      isMatch,
      onMouseOver,
      onMouseOut,
    } = this.props;

    return (
      <AutocompleteItem
        t={t}
        attrs={{
          'data-bhc': item.bhc,
          'data-value': item.value,
        }}
        id={`tw-${index}`}
        isHighlight={isHighlight}
        isMatch={isMatch}
        onClick={this.handleItemClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {item.formatted}
        {this.renderSubValue(item)}
      </AutocompleteItem>
    );
  }
}
