import { trackEvent } from './track';

/**
 * Function to determine parameters for HTML5 Geolocation API
 * @return Promise
 */
export function detectCurrentLocation() {
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // read lat, lng from callback data, and limit it to 3 decimal places
        const lat = parseFloat(position.coords.latitude.toFixed(3));
        const lng = parseFloat(position.coords.longitude.toFixed(3));
        trackEvent('client-geolocate-successful', { lat, lng }); // track data

        resolve({ lat, lng });
      },
      err => reject(err),
      { timeout: 10000 }
    );
  });
}
