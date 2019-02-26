import React, { Component } from 'react';
import RecentLocations from './RecentLocations';
import CurrentLocation from './CurrentLocation';
import LocationSuggestionsContainer from './LocationSuggestionsContainer';

/**
 * The default suggestions of location search
 */
export default class LocationDefaultSuggestions extends Component {
  constructor(props) {
    super(props);

    this.renderBody = this.renderBody.bind(this);
  }

  renderBody(highlightIndex) {
    return (
      <div id="autocomplete-list">
        <CurrentLocation isHighlight={highlightIndex === 0} {...this.props} />
        <RecentLocations highlightIndex={highlightIndex} {...this.props} />
      </div>
    );
  }

  render() {
    const {
      keyword,
      recentLocations,
      searchByLocation,
      prefillLocation,
      getCurrentPosition,
      closeSearch,
    } = this.props;

    return (
      <LocationSuggestionsContainer
        keyword={keyword}
        suggestions={recentLocations}
        renderBody={this.renderBody}
        searchByLocation={searchByLocation}
        prefillLocation={prefillLocation}
        getCurrentPosition={getCurrentPosition}
        closeSearch={closeSearch}
      />
    );
  }
}
