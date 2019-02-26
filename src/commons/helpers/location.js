const regZipWithCountry = /,\s\d{5},\s?[a-z]{2,3}$/i;
const regCountry = /,\s?[a-z]{2,3}$/i;

/**
 * Remove country and zipcode
 *
 * @param {string} address - address
 * @returns {string} address removed zip code and country
 */
export function formatAddress(address) {
  if (!address) {
    return address;
  }
  if (regZipWithCountry.test(address)) {
    return address.replace(regZipWithCountry, '');
  }
  return address.replace(regCountry, '');
}

/**
 * Limit lat/lng to 3 digits after the decimal point.
 *
 * @param {number|string} latLng - lat or lng
 * @param {number=3} fractionDigits — Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 * @returns {?number}
 */
export function fixLatOrLng(latLng, fractionDigits = 3) {
  if (typeof latLng === 'string') {
    latLng = parseFloat(latLng);
  }

  if (typeof latLng === 'number' && !isNaN(latLng)) {
    return parseFloat(latLng.toFixed(fractionDigits));
  }

  return null;
}
