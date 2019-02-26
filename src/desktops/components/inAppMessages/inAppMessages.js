import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { blocked } from 'app/common/helpers/inAppMessages';
import { blockBanner } from 'app/common/actions/inAppMessages';
import { windowLoaded } from '@grpn/document-states';

/**
 * Display the In App Message Banner
 */
export class InAppMessages extends Component {
  componentDidUpdate(prevProps) {
    const { banner } = this.props;
    if (banner && banner !== prevProps.banner) {
      if (this.container) {
        banner.message = banner.message.replace(
          'src',
          'class="lazy-wl no-bg" style="min-height: 100px" data-src'
        );
        windowLoaded.then(() => {
          this.container.innerHTML = banner.message;

          Groupon.Utils.lazyLoadImages('.lazy-wl'); // ensure lazyload finds the banner
        });
      }
    }
  }

  render() {
    const { t, banner } = this.props;
    if (!banner || !banner.id || blocked(banner.id)) {
      return null;
    }

    const { id, title } = banner;

    return (
      <div className="page-container">
        <div id="in-app-messages">
          <div
            id="iam-messages"
            className="iam-whiteUI"
            data-bhw="SiteAnnouncement"
          >
            <div
              id={`message-${id}`}
              data-bhc={`announcement:${id}`}
              className="iam-banner"
              data-bhd={banner.bhd}
            >
              <div id="iam-head">
                {title && (
                  <div
                    role="heading"
                    id="iam-headline"
                    className="iam-headline"
                  >
                    {title}
                  </div>
                )}

                <span
                  data-bhw="site-announcement-close"
                  data-bhc={`announcement-close:${id}`}
                  className="hide-link"
                  title={t.common.close}
                  role="button"
                  onClick={() => {
                    this.props.blockBanner(banner);
                  }}
                >
                  <span className="ax-hidden">{t.common.close}</span>
                </span>
              </div>
              <div id="iam-msg" className="iam-msg">
                <a
                  href={banner.url || banner.target}
                  ref={element => {
                    this.container = element;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    banner: state.inAppMessages.banner,
    t: state.t,
  };
};

export default connect(
  mapStateToProps,
  { blockBanner }
)(InAppMessages);
