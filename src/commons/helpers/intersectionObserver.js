/**
 *
 * @param {Element} element
 * @param {function} fn
 * @param {Object=} options
 */
export function executeOnIntersection(element, fn, options = {}) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        fn();
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(element);
}
