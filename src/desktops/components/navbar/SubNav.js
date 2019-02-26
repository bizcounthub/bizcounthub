import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { subnavSelector } from 'app/desktop/selectors/navbar';
import * as navbarActions from 'app/desktop/actions/navbar';
import PrimaryTabHighlight from './PrimaryTabHighlight';
import SubNavFlyout from './SubNavFlyout';

class SubNav extends Component {
  componentDidMount() {
    window.Groupon.Utils.lazyLoadImages('#subnav .lazy-load');
  }

  render() {
    const { flyouts } = this.props;
    return (
      <nav className="subnav notranslate" id="subnav">
        <PrimaryTabHighlight {...this.props} />
        {flyouts.map(flyout => (
          <SubNavFlyout
            key={`flyout-${flyout.id}`}
            {...this.props}
            flyout={flyout}
          />
        ))}
      </nav>
    );
  }
}

export default connect(
  subnavSelector,
  navbarActions
)(SubNav);
