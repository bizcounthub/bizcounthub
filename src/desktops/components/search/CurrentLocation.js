import React, { Component } from 'react';
import AutocompleteItem from './AutocompleteItem';

export default class CurrentLocation extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.getCurrentPosition();
  }

  render() {
    const { t, isHighlight } = this.props;
    return (
      <ul data-bhw="geoLocation">
        <AutocompleteItem
          t={t}
          isHighlight={isHighlight}
          className="tw-current"
          linkClassName="current-location tw-highlight icon-compass-needle"
          attrs={{
            'data-value': 'Current Location',
            'data-bhw': 'currentLocation',
          }}
          onClick={this.handleClick}
        >
          {t.search.currentLocation}
        </AutocompleteItem>
      </ul>
    );
  }
}
