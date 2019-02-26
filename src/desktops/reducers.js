import { combineReducers } from 'redux';

import app from '../commons/reducers/app';
import t from '../commons/reducers/t';
import flags from '../commons/reducers/flags';
import auth from '../commons/reducers/auth';
import inAppMessages from '../commons/reducers/inAppMessages';
import notifications from '../commons/reducers/notifications';
import location from '../commons/reducers/location';
import recentLocations from '../commons/reducers/recentLocations';
import recentSearches from '../commons/reducers/recentSearches';
import dealSearch from '../commons/reducers/dealSearch';
import dealSuggestions from '../commons/reducers/dealSuggestions';
import locationSearch from '../commons/reducers/locationSearch';
import locationSuggestions from '../commons/reducers/locationSuggestions';
import search from '../commons/reducers/search';
import cookieBanner from '../commons/reducers/cookieBanner';
import cart from '../commons/reducers/cart';
import signinFlyout from '../desktops/reducers/signinFlyout';
import responsive from '../desktops/reducers/responsive';
import navbar from '../desktops/reducers/navbar';

const rootReducer = combineReducers({
  app,
  t,
  auth,
  flags,
  inAppMessages,
  notifications,
  location,
  recentLocations,
  recentSearches,
  dealSearch,
  dealSuggestions,
  locationSearch,
  locationSuggestions,
  search,
  cookieBanner,
  cart,
  signinFlyout,
  responsive,
  navbar,
});

export default rootReducer;
