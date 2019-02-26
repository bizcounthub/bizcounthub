import React, { Component } from 'react';
import DealSuggestionItem from './DealSuggestionItem';
import DealSuggestionsContainer from './DealSuggestionsContainer';

/**
 * The autocomplete result of deal search
 */
export default class DealSuggestions extends Component {
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

    return suggestions.findIndex(item => {
      const { normalized, value } = item;

      return (
        value.toLowerCase() === lowerCasedKeyword ||
        (normalized && normalized.toLowerCase() === lowerCasedKeyword)
      );
    });
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
    const { keyword, suggestions } = this.props;
    console.log('renderBody:', suggestions);
    const matchIndex = this.findMatchIndex();

    return (
      <ul data-bhw="dealAutocomplete" data-bhc={`UserTyped:${keyword}`}>
        {suggestions.map((item, index) => (
          <DealSuggestionItem
            item={item}
            key={item.bhc}
            index={index}
            isHighlight={highlightIndex === index}
            isMatch={
              matchIndex === index && highlightIndex === -1 && !this.state.hover
            }
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            {...this.props}
          />
        ))}
      </ul>
    );
  }

  render() {
    const {
      keyword,
      suggestions,
      searchByDeal,
      prefillDeal,
      closeSearch,
    } = this.props;

    console.log('suggestions', suggestions);
    return (
      <DealSuggestionsContainer
        keyword={keyword}
        suggestions={suggestions}
        renderBody={this.renderBody}
        searchByDeal={searchByDeal}
        prefillDeal={prefillDeal}
        closeSearch={closeSearch}
      />
    );
  }
}
