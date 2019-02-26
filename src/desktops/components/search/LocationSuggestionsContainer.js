import React, { Component } from 'react';
import KeydownWrapper from './KeydownWrapper';

/**
 * The autocomplete result of location search
 */
export default class LocationSuggestionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlightIndex: -1,
    };

    this.highlight = this.highlight.bind(this);
    this.getHighlightedItem = this.getHighlightedItem.bind(this);
    this.selectHighlightedItem = this.selectHighlightedItem.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleArrowUp = this.handleArrowUp.bind(this);
    this.handleArrowDown = this.handleArrowDown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.highlight(-1);
    }
  }

  highlight(highlightIndex) {
    this.setState({
      highlightIndex,
    });
  }

  getHighlightedItem() {
    const { suggestions } = this.props;
    const { highlightIndex } = this.state;
    const locationSuggestion = suggestions[highlightIndex - 1];
    return locationSuggestion ? locationSuggestion.raw : null;
  }

  selectHighlightedItem() {
    const { prefillLocation } = this.props;
    const locationSuggestion = this.getHighlightedItem();
    if (locationSuggestion) {
      prefillLocation(locationSuggestion);
    }
  }

  handleEsc(e) {
    const { closeSearch } = this.props;
    const { highlightIndex } = this.state;
    e.preventDefault();
    if (highlightIndex > -1) {
      this.highlight(-1);
    } else {
      closeSearch();
    }
  }

  handleTab() {
    this.selectHighlightedItem();
  }

  handleEnter(e) {
    const { searchByLocation, getCurrentPosition } = this.props;
    // current location
    if (this.state.highlightIndex === 0) {
      e.preventDefault();
      getCurrentPosition();
    } else {
      const locationSuggestion = this.getHighlightedItem();
      if (locationSuggestion) {
        e.preventDefault();
        searchByLocation(locationSuggestion);
      }
    }
  }

  handleArrowUp(e) {
    e.preventDefault();
    const { highlightIndex } = this.state;
    if (highlightIndex > 0) {
      this.highlight(highlightIndex - 1);
    }
  }

  handleArrowDown(e) {
    e.preventDefault();
    const { suggestions } = this.props;
    const { highlightIndex } = this.state;
    if (highlightIndex < suggestions.length) {
      this.highlight(highlightIndex + 1);
    }
  }

  render() {
    const { renderBody } = this.props;
    const { highlightIndex } = this.state;

    return (
      <KeydownWrapper
        onTab={this.handleTab}
        onEnter={this.handleEnter}
        onArrowUp={this.handleArrowUp}
        onArrowDown={this.handleArrowDown}
        onEsc={this.handleEsc}
      >
        {renderBody(highlightIndex)}
      </KeydownWrapper>
    );
  }
}
