import React, { Component } from 'react';
import classNames from 'classnames';
import throttle from 'lodash/throttle';
import LocationSearchResult from './LocationSearchResult';

export default class LocationInput extends Component {
  constructor(props) {
    super(props);
    const { locationKeyword, flags } = props;

    this.state = {
      keyword: locationKeyword,
    };

    this.changeKeyword = this.changeKeyword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.openSuggestions = this.openSuggestions.bind(this);
    this.suggestThrottle = throttle(this.suggest.bind(this), 250);

    this.defaultAttributes = {
      id: 'ls-location',
      name: 'location',
      type: 'text',
      autoComplete: 'off',
      disabled: flags.disableSearchDesktop,
      maxLength: '50',
      spellCheck: 'false',
      'aria-autocomplete': 'list',
      'aria-haspopup': 'true',
      'data-bhw': 'LocationBarField',
      onKeyDown: this.handleKeydown,
      onInput: this.handleChange,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locationKeyword !== this.props.locationKeyword) {
      this.setState({
        keyword: this.props.locationKeyword,
      });
    }
  }

  /**
   * Suggest autocomplete for keyword
   */
  suggest() {
    const { suggestLocations } = this.props;
    const keyword = this.input ? this.input.value : this.state.keyword;
    suggestLocations(keyword.trim());
  }

  /**
   * Change the keyword
   * @param {String} keyword
   */
  changeKeyword(keyword) {
    const { updateLocationKeyword } = this.props;

    this.setState({ keyword });
    updateLocationKeyword(keyword.trim());
    this.suggestThrottle();
  }

  openSuggestions() {
    const { search, openSearch } = this.props;

    if (search.context !== 'location' && !search.submitting) {
      openSearch('location');
    }

    this.suggestThrottle();
  }

  /**
   * Update the state and search after the input changed
   *
   * @param {Event} e
   */
  handleChange(e) {
    const { search, clearError } = this.props;
    const keyword = e.target.value;
    if (keyword === this.state.keyword) {
      return;
    }
    if (search.error) {
      clearError();
    }
    this.changeKeyword(keyword);
  }

  handleKeydown() {
    this.openSuggestions();
  }

  handleFocus() {
    this.openSuggestions();
  }

  render() {
    const { t, location, locationErrorStatus, search, flags } = this.props;

    let placeholder = location.address;
    if (location.currentLocation) {
      placeholder = t.searchbar.nearMe;
    }

    let value = this.state.keyword;
    if (!value && search.context !== 'location') {
      value = placeholder;
    }

    const inputAttributes = {
      value,
      placeholder: t.searchbar.locationPlaceholder,
    };
    if (search.context === 'location') {
      // #autocomplete-list is in the DOM and can be safely referenced
      inputAttributes['aria-owns'] = 'autocomplete-list';
    }

    return (
      <div
        className={classNames(
          {
            'ls-error': locationErrorStatus,
            disabled: flags.disableSearchDesktop,
          },
          'search-box location-search search-bar-icon icon-marker'
        )}
      >
        <label
          id="placeholderLocation"
          htmlFor="ls-location"
          className="ax-hidden"
        >
          {t.searchbar.locationPlaceholder}
        </label>
        <input {...this.defaultAttributes} {...inputAttributes} />
        <LocationSearchResult />
      </div>
    );
  }
}
