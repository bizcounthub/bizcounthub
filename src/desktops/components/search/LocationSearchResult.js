import React, { Component } from 'react';
import { connect } from 'react-redux';
import { suggestionsSelector } from '../../selectors/locationSuggestions';
import LocationSuggestions from './LocationSuggestions';
import LocationDefaultSuggestions from './LocationDefaultSuggestions';
import { closeSearch } from '../../../commons/actions/search';
import {
  searchByLocation,
  clearAllRecentLocations,
  removeRecentLocation,
  getCurrentPosition,
  prefillLocation,
} from '../../../commons/actions/locationSearch';

/**
 * The autocomplete result of location search
 */
export class LocationSearchResult extends Component {
  constructor(props) {
    super(props);

    this.renderTypeahead = this.renderTypeahead.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  renderError() {
    const { errorStatus, keyword } = this.props;

    return (
      <ul>
        <li
          data-bhw="SearchBarError"
          className="ls-error-dialog icon-circle-alert"
        >
          <span data-bhc={`location-not-found:${keyword}`}>
            {errorStatus.message}
          </span>
        </li>
      </ul>
    );
  }

  /**
   * Render search result or default content
   */
  renderTypeahead() {
    const { keyword, errorStatus } = this.props;

    if (errorStatus) {
      return this.renderError();
    }

    // if keyword is empty
    if (!keyword.length) {
      return <LocationDefaultSuggestions {...this.props} />;
    }

    return <LocationSuggestions {...this.props} />;
  }

  render() {
    const { search, errorStatus } = this.props;
    if (search.context !== 'location' && !errorStatus) {
      return null;
    }

    return (
      <div
        className="ls-search-result typeahead-location typeahead-response"
        id="ls-search-results"
        aria-hidden="false"
        data-bhw="locationAutocomplete"
        style={{ display: 'block' }}
      >
        {this.renderTypeahead()}
      </div>
    );
  }
}

export default connect(
  suggestionsSelector,
  {
    searchByLocation,
    clearAllRecentLocations,
    removeRecentLocation,
    getCurrentPosition,
    prefillLocation,
    closeSearch,
  }
)(LocationSearchResult);
