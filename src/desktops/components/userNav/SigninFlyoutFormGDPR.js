import { h, Component } from 'preact';
import placeholders from 'app/common/helpers/linkPlaceholders';

export default class SigninFlyoutFormGDPR extends Component {
  render() {
    const { t, flags } = this.props;
    const { showGDPRSigninFlyout } = flags;

    if (!showGDPRSigninFlyout) {
      return null;
    }

    const text = t.signinFlyout.gdprSignInFlyout || '';
    const content = placeholders
      .load(text)
      .addPlaceholder('%link_terms_open%', '%link_terms_close%', {
        id: 'gdprTermsLink',
        url: '/legal/termsofservice',
        bhw: 'gdprTermsLink',
      })
      .addPlaceholder('%link_privacy_open%', '%link_privacy_close%', {
        id: 'gdprPrivacyLink',
        url: '/legal/privacypolicy',
        bhw: 'gdprPrivacyLink',
      })
      .render();

    return (
      <div
        id="sf-gdpr"
        className="sf-gdpr"
        data-privacy-version="-1"
        data-terms-version="-1"
      >
        {content}
      </div>
    );
  }
}
