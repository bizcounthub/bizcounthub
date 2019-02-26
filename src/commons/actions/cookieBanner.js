import { callConsentService } from '../../../modules/cookie_banner_gdpr/frontend/main';
import ls_ttl from 'localstorage-ttl';
import { setC3S } from '../helpers/c3s_cookie';
import {
  BOTTOM_GDPR_INIT,
  BOTTOM_GDPR_ACCEPT,
} from '../constants/action-types';
import { storeConsentAction } from '../../../src/frontend/helper/consent/consentLogFallback';

const HAD_NO_C3S_KEY = 'ls-gdpr-had-no-c3s';

export function bottomCookieBannerInit() {
  const c3s = Cookie.get('c3s');

  let firstTimeUser = false;
  try {
    firstTimeUser = ls_ttl.get(HAD_NO_C3S_KEY);
  } catch (e) {}

  const show = I18n.country === 'NL' && (firstTimeUser || !c3s);
  if (show) {
    callConsentService('notice_bottom', '', {}, 0);
  }

  return {
    type: BOTTOM_GDPR_INIT,
    show,
  };
}

export function bottomCookieBannerAccept(isBeforePageHide = false) {
  setC3S(3, 1);
  localStorage.removeItem(HAD_NO_C3S_KEY);
  if (isBeforePageHide) {
    storeConsentAction('consent_bottom', 3, 1);
  } else {
    callConsentService('consent_bottom_button', '', {}, 3);
  }

  return {
    type: BOTTOM_GDPR_ACCEPT,
  };
}
