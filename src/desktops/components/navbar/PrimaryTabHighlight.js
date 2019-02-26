import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { indicatorSelector } from 'app/desktop/selectors/navbar';

export class PrimaryTabHighlight extends Component {
  render() {
    const { activePrimaryTab } = this.props;
    if (!activePrimaryTab || !activePrimaryTab.width) {
      return null;
    }

    const { x, width } = activePrimaryTab;

    return (
      <div id="ls-rail" className="ls-rail">
        <span
          id="ls-rail-slide"
          style={{
            left: `${x - 10}px`,
            width: `${width + 20}px`,
          }}
        />
      </div>
    );
  }
}

export default connect(indicatorSelector)(PrimaryTabHighlight);
