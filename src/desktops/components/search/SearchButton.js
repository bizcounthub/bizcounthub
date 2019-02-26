import React, { Component } from 'react';
import classNames from 'classnames';

export default class SearchButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { t, search, flags } = this.props;
    const { submitting } = search;
    return (
      <button
        id="ls-header-search-button"
        className={classNames('ls-header-search-button', {
          'icon-magnifying-glass': !submitting,
          'gig-spinner': submitting,
        })}
        type="submit"
        data-bhw="LocationBarFindDeals"
        disabled={submitting || flags.disableSearchDesktop}
      >
        <span className="accessibility-hidden">{t.searchbar.action}</span>
      </button>
    );
  }
}
