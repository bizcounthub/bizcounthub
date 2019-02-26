export const C3S = 'c3s';
/**
 * Set the c3s cookie value
 * @param {number=3} consentedValue - c3s consent class
 * @param {number=1} version - c3s cookie policy version
 */
export function setC3S(consentedValue = 3, version = 1) {
  Cookie.set(C3S, [version, Date.now(), consentedValue].join('-'));
}
