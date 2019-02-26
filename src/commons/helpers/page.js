const resolvedScripts = {};

/**
 * Load javascript file and insert to page head
 * @param {String} url - The script url
 * @param {?String} id - ID set to the script tag
 * @returns Promise
 */
export function loadScript(url, id) {
  return new Promise((resolve, reject) => {
    const done = () => {
      resolvedScripts[url] = true;
      resolve();
    };

    if (resolvedScripts[url]) {
      done();
      return;
    }

    if (id && document.getElementById(id)) {
      done();
      return;
    }

    const script = document.createElement('script');
    if (id) {
      script.id = id;
    }

    //IE
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (/loaded|complete/.test(script.readyState)) {
          script.onreadystatechange = null;
          done();
        }
      };
    } else {
      script.onload = function() {
        done();
      };
    }

    // failed to download js
    script.onerror = () => {
      resolvedScripts[url] = false;
      reject();
    };

    script.src = url;
    (document.body || document.head).appendChild(script);
  });
}

export function getScrollPosition() {
  const top =
    typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY;
  const left =
    typeof window.scrollX === 'undefined' ? window.pageXOffset : window.scrollX;
  return { top, left };
}

export function setScrollPosition(pos) {
  if (pos) {
    window.scrollTo(pos.left, pos.top);
  }
}
