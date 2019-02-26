import { h, Component } from 'preact';
import classNames from 'classnames';
import SubNavFlyoutGoods from './SubNavFlyoutGoods';
import SubNavFlyoutItem from './SubNavFlyoutItem';

export default class SubNavFlyout extends Component {
  render() {
    const { flyout } = this.props;
    const { id, isActive, columns, navbarCards } = flyout;
    const cards = navbarCards && navbarCards.cards;

    if (id !== 'goods') {
      // Test if there are column links or cards
      if (!((columns && columns.length) || (cards && cards.length))) {
        return null;
      }
    }

    let content = null;
    switch (id) {
      case 'goods':
        content = <SubNavFlyoutGoods {...this.props} />;
        break;
      default:
        content = <SubNavFlyoutItem {...this.props} />;
    }

    return (
      <nav
        className={classNames({ 'ls-hide': !isActive }, `subnav-flyout`)}
        id={`subnav-${id}-tab`}
        data-bhw={`SubNav-${id}-tab`}
        role="menu"
        aria-labelledby={`${id}-tab-link`}
        onMouseOver={() => this.props.activatePrimaryTab(id)}
        onMouseOut={() => this.props.deactivatePrimaryTab()}
      >
        {content}
      </nav>
    );
  }
}
