/*
 * LS-2925 sticky desktop header
 */
let header;
let fn;
let lastY = 0;
let offset = 0;
let tick = false;
const stickyClass = 'ls-sticky-search';
let hasStickyHeader = false;
let isSearchPage = false;

/**
 * Callback to remove sticky class
 *
 * @callback removeStickyClass
 */
const removeStickyClass = function() {
  this.classList.remove(stickyClass);
};

/**
 * Callback animating the header elements
 *
 * @callback onScroll
 */
const onScroll = function() {
  const y = window.scrollY || window.pageYOffset;
  if (lastY < y && y > offset) {
    header.classList.add(stickyClass);
  } else if (lastY > y || y < offset) {
    header.classList.remove(stickyClass);
  }
  lastY = y;
  tick = false;
};

/**
 * Scroll callback
 *
 * @callback rtChannel
 */
const rtChannel = function() {
  if (!tick) {
    fn(onScroll);
  }
  tick = true;
};

/*
 * Bind sticky header method from scroll event
 * Remove mouse enter event
 * NOTE: function is used externally
 */
const setEventListener = function() {
  if (!hasStickyHeader) {
    return;
  } // NEEDED
  window.addEventListener('scroll', rtChannel, { passive: true });
  if (!header) {
    return;
  }
  header.addEventListener('mouseenter', removeStickyClass, { passive: true }); // FIXME: change this to pointer event (LS-2806)
};

/*
 * Remove sticky header method to scroll event
 * Add event to show the channel nav, when mouse enters header
 * NOTE: function is used externally
 */
const removeEventListener = function() {
  if (!hasStickyHeader) {
    return;
  } // NEEDED
  window.removeEventListener('scroll', rtChannel, { passive: true });
  if (!header) {
    return;
  }
  header.removeEventListener('mouseenter', removeStickyClass, {
    passive: true,
  }); // FIXME: change this to pointer event (LS-2806)
  header.classList.remove(stickyClass);
};

const stickyHeader = {
  init() {
    header = document.querySelector('.header-v2');
    if (Groupon.LS.flags.isSearchPage && header) {
      isSearchPage = true;
      header.classList.add('ls-sticky-header');
    }

    hasStickyHeader =
      isSearchPage && header && header.classList.contains('ls-sticky-header');

    if (!hasStickyHeader) {
      return;
    } // test and bind result to closure

    fn = cb => window.requestAnimationFrame(cb);

    lastY = window.scrollY || window.pageYOffset;
    offset += 1;

    setEventListener();
  },

  pause() {
    return removeEventListener();
  },
  resume() {
    return setEventListener();
  },
};

module.exports = stickyHeader;
