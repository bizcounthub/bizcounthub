import React, { Component } from 'react';
import classNames from 'classnames';

/**
 * The auto complete item
 */
export default class AutocompleteItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleting: false,
    };

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  // click suggest item
  handleItemClick(e) {
    const { onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
  }

  handleRemoveItem() {
    const { onRemove } = this.props;
    this.setState({
      deleting: true,
    });
    window.setTimeout(() => {
      onRemove(this.props);
    }, 400);
  }

  handleMouseOver(e) {
    const { onMouseOver } = this.props;
    onMouseOver && onMouseOver(e);
  }

  handleMouseOut(e) {
    const { onMouseOut } = this.props;
    onMouseOut && onMouseOut(e);
  }

  render() {
    const {
      t,
      attrs,
      children,
      canBeRemoved,
      className,
      linkClassName,
      isHighlight,
      isMatch,
      id,
    } = this.props;

    return (
      <li
        className={classNames('tw-item', className, {
          deleting: this.state.deleting,
        })}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <a
          className={classNames('tw-link', linkClassName, {
            'typeahead-match typeahead-match-highlight': isHighlight || isMatch,
          })}
          tabIndex="-1"
          onClick={this.handleItemClick}
          id={id}
          {...attrs}
        >
          {children}
        </a>
        {canBeRemoved && (
          <span
            className="tw-clear icon-x"
            aria-label={t.common.remove}
            role="button"
            onClick={this.handleRemoveItem}
            data-bhw="removeItem"
          />
        )}
      </li>
    );
  }
}
