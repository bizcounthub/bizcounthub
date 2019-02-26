import React, { h, Component } from 'react';
import KeydownWrapper from './KeydownWrapper';

/**
 * The container of the autocomplete result of deal search
 */
export default class DealSuggestionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlightIndex: props.defaultHighlightIndex || -1,
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
      this.highlight(this.props.defaultHighlightIndex || -1);
    }
  }

  highlight(highlightIndex, callback) {
    this.setState(
      {
        highlightIndex,
      },
      callback
    );
  }

  getHighlightedItem() {
    console.log('highlight:', this.props);
    const { suggestions } = this.props;
    const { highlightIndex } = this.state;
    const dealSuggestion = suggestions[highlightIndex];
    return dealSuggestion ? dealSuggestion.raw : null;
  }

  selectHighlightedItem() {
    const { prefillDeal } = this.props;
    const dealSuggestion = this.getHighlightedItem();
    if (dealSuggestion) {
      prefillDeal(dealSuggestion);
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
    const { searchByDeal } = this.props;
    const dealSuggestion = this.getHighlightedItem();
    if (dealSuggestion) {
      e.preventDefault();
      searchByDeal(dealSuggestion);
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
    if (highlightIndex < suggestions.length - 1) {
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
