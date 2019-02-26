import React, { Component } from 'react';
import LocationSuggestionItem from './LocationSuggestionItem';
import CurrentLocation from './CurrentLocation';
import LocationSuggestionsContainer from './LocationSuggestionsContainer';

/**
 * The autocomplete result of location search
 */
export default class LocationSuggestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };

    this.renderBody = this.renderBody.bind(this);
    this.findMatchIndex = this.findMatchIndex.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  findMatchIndex() {
    const { keyword, suggestions } = this.props;
    const lowerCasedKeyword = keyword.toLowerCase();

    return suggestions.findIndex(
      item => lowerCasedKeyword === item.address.toLowerCase()
    );
  }

  handleMouseOver() {
    this.setState({
      hover: true,
    });
  }

  handleMouseOut() {
    this.setState({
      hover: false,
    });
  }

  renderBody(highlightIndex) {
    const { suggestions } = this.props;
    const matchIndex = this.findMatchIndex();
    return (
      <div id="autocomplete-list">
        <CurrentLocation isHighlight={highlightIndex === 0} {...this.props} />
        <ul data-bhw="locationAutocomplete">
          {suggestions.map((item, index) => (
            <LocationSuggestionItem
              key={`suggestion-${item.bhc}`}
              item={item}
              index={index}
              isHighlight={highlightIndex === index + 1}
              isMatch={
                matchIndex === index &&
                highlightIndex === -1 &&
                !this.state.hover
              }
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              {...this.props}
            />
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const {
      keyword,
      suggestions,
      searchByLocation,
      prefillLocation,
      getCurrentPosition,
      closeSearch,
    } = this.props;

    return (
      <LocationSuggestionsContainer
        keyword={keyword}
        suggestions={suggestions}
        renderBody={this.renderBody}
        searchByLocation={searchByLocation}
        prefillLocation={prefillLocation}
        getCurrentPosition={getCurrentPosition}
        closeSearch={closeSearch}
      />
    );
  }
}
