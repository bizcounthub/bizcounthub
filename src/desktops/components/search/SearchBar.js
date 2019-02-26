import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSelector } from '../../../commons/selectors/search';
import {
  clearError,
  openSearch,
  closeSearch,
  manualSearch,
} from '../../../commons/actions/search';
import DealInput from './DealInput';
import LocationInput from './LocationInput';
import SearchButton from './SearchButton';
import {
  suggest as suggestLocations,
  updateKeyword as updateLocationKeyword,
} from '../../../commons/actions/locationSearch';
import {
  suggest as suggestDeals,
  updateKeyword as updateDealKeyword,
} from '../../../commons/actions/dealSearch';

const validElementIds = '#ls-location, #ls-search, #ls-search-results'; // multiple css selector combined

let enableSearchIcon;

function checkExperiment() {
  if (enableSearchIcon === undefined) {
    enableSearchIcon = true;
    // window.Finch.experiment('LS-5218-Search-Icon-Desktop-INTL', {
    //   Treatment: () => {
    //     enableSearchIcon = true;
    //   },
    // });
  }
}

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleDocumentActive = this.handleDocumentActive.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    checkExperiment();
    document.addEventListener('click', this.handleDocumentActive);
    document.addEventListener('focusin', this.handleDocumentActive);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentActive);
    document.removeEventListener('focusin', this.handleDocumentActive);
  }

  handleDocumentActive(e) {
    const { search, closeSearch: closeSearchAction } = this.props;
    if (e.target && e.target.closest(validElementIds)) {
      return;
    }
    if (search.context) {
      closeSearchAction();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.manualSearch();
  }

  render() {
    const { t } = this.props;
    return (
      <form
        className="search-bar-v2 search-bar-loaded notranslate"
        id="ls-search-form"
        data-bhw="SearchBar"
        role="search"
        action=""
        aria-label={t.searchbar.dealPlaceholder}
        onSubmit={this.handleSubmit}
      >
        <DealInput {...this.props} enableSearchIcon={enableSearchIcon} />
        <LocationInput {...this.props} />
        <SearchButton {...this.props} />
      </form>
    );
  }
}

export default connect(
  searchSelector,
  {
    clearError,
    openSearch,
    closeSearch,
    manualSearch,
    suggestLocations,
    suggestDeals,
    updateDealKeyword,
    updateLocationKeyword,
  }
)(SearchBar);
