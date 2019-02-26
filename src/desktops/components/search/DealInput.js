import React, { Component } from 'react';
import classNames from 'classnames';
import throttle from 'lodash/throttle';
import DealSearchResult from './DealSearchResult';

export default class DealInput extends Component {
  constructor(props) {
    super(props);
    const { dealKeyword, flags } = props;

    this.state = {
      keyword: dealKeyword,
    };

    this.changeKeyword = this.changeKeyword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.openSuggestions = this.openSuggestions.bind(this);
    this.suggestThrottle = throttle(this.suggest.bind(this), 250);

    this.defaultAttributes = {
      id: 'ls-search',
      name: 'search',
      type: 'search',
      autoComplete: 'off',
      disabled: flags.disableSearchDesktop,
      maxLength: '50',
      spellCheck: 'false',
      'aria-autocomplete': 'list',
      'aria-haspopup': 'true',
      'data-bhw': 'FreeTextSearchField',
      onKeyDown: this.handleKeydown,
      onInput: this.handleChange,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dealKeyword !== this.props.dealKeyword) {
      this.setState({
        keyword: this.props.dealKeyword,
      });
    }
  }

  /**
   * Suggest autocomplete for keyword
   */
  suggest() {
    const { suggestDeals } = this.props;
    const keyword = this.input ? this.input.value : this.state.keyword;
    suggestDeals(keyword.trim());
  }

  /**
   * Change the keyword
   * @param {String} keyword
   */
  changeKeyword(keyword) {
    const { updateDealKeyword } = this.props;

    this.setState({ keyword });
    updateDealKeyword(keyword.trim());
    this.suggestThrottle();
  }

  openSuggestions() {
    const { search, openSearch } = this.props;
    if (search.context !== 'deal' && !search.submitting) {
      openSearch('deal');
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
    const { t, enableSearchIcon, search, flags } = this.props;

    const inputAttributes = {
      value: this.state.keyword,
      placeholder: 'Search Groupon',
    };
    if (search.context === 'deal') {
      // #autocomplete-list is in the DOM and can be safely referenced
      inputAttributes['aria-owns'] = 'autocomplete-list';
    }

    return (
      <div
        className={classNames(
          'icon-magnifying-glass search-box deal-search search-bar-icon',
          {
            'disable-search': flags.disableSearchDesktop,
          }
        )}
      >
        <label
          id="placeholderSearch"
          className=" ax-hidden"
          htmlFor="ls-search"
        >
          {/* {t.searchbar.dealPlaceholder} */}
          Search Groupon
        </label>
        <input {...this.defaultAttributes} {...inputAttributes} />
        <DealSearchResult enableSearchIcon={enableSearchIcon} />
      </div>
    );
  }
}
