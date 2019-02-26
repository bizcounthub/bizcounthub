import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import {
  bottomCookieBannerInit,
  bottomCookieBannerAccept,
} from 'app/common/actions/cookieBanner';

import { getFullText } from '../../../common/helpers/cookieBanner';

class BottomCookieBanner extends Component {
  constructor(props) {
    super(props);

    const { show } = props.init();
    if (!show) return;

    this.handleBeforePageHide = this.handleBeforePageHide.bind(this);
    this.handleAcceptClick = this.handleAcceptClick.bind(this);
    this.handleReadMoreClick = this.handleReadMoreClick.bind(this);

    window.addEventListener('pagehide', this.handleBeforePageHide);

    this.state = {
      showFullText: false,
    };
  }

  handleBeforePageHide() {
    this.props.accept(true);
  }

  handleAcceptClick() {
    window.removeEventListener('pagehide', this.handleBeforePageHide);
    this.props.accept(false);
  }

  handleReadMoreClick() {
    this.setState({
      showFullText: true,
    });
  }

  render() {
    const { show, t } = this.props;
    if (!show) {
      return null;
    }

    const accept = t.cookieBanner.accept || '';
    const fullText = getFullText(t) || '';
    return (
      <div className="bottom-gdpr" data-bhc="gdprBottom">
        <div className="page-container bottom-gdpr-contents">
          <div className="bottom-gdpr-full-txt">
            <span className="bottom-gdpr-txt">{fullText}</span>
          </div>
          <button
            className="btn btn-transparent"
            onClick={this.handleAcceptClick}
            data-bhw="gdprBottomAcceptBtn"
          >
            {accept}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  show: state.cookieBanner.showBottomBanner,
  t: state.t,
});

export default connect(
  mapStateToProps,
  {
    init: bottomCookieBannerInit,
    accept: bottomCookieBannerAccept,
  }
)(BottomCookieBanner);
