import React, { Component } from 'react';
import { connect } from 'react-redux';

import DealDefaultSuggestions from './DealDefaultSuggestions';
import DealSuggestions from './DealSuggestions';
import { suggestionsSelector } from '../../selectors/dealSuggestions';
import { closeSearch } from '../../../commons/actions/search';
import {
  searchByDeal,
  clearAllRecentSearches,
  removeRecentSearch,
  prefillDeal,
} from '../../../commons/actions/dealSearch';

export class DealSearchResult extends Component {
  constructor(props) {
    super(props);

    this.renderTypeahead = this.renderTypeahead.bind(this);
  }

  /**
   * Render search result or default content
   */
  renderTypeahead() {
    const { keyword, enableSearchIcon } = this.props;
    // if keyword is empty
    if (!keyword.length) {
      return (
        <DealDefaultSuggestions
          {...this.props}
          enableSearchIcon={enableSearchIcon}
        />
      );
    }

    // if there is a keyword
    return <DealSuggestions {...this.props} />;
  }

  render() {
    console.log('delseachresult:', this.props);
    const { search } = this.props;
    if (search.context !== 'deal') {
      return null;
    }

    return (
      <div
        className="typeahead-search typeahead-response"
        id="ls-search-results"
        aria-hidden="false"
        data-bhw="dealAutocomplete"
        style={{ display: 'block' }}
      >
        <div id="autocomplete-list">{this.renderTypeahead()}</div>
      </div>
    );
  }
}

export default connect(
  suggestionsSelector,
  {
    searchByDeal,
    clearAllRecentSearches,
    removeRecentSearch,
    prefillDeal,
    closeSearch,
  }
)(DealSearchResult);
