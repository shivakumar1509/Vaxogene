// assets/include.js
(function () {
  function resolvePath(path, siteBase) {
    // If path starts with http(s), return as-is
    if (/^https?:\/\//i.test(path)) return path;
    // If path starts with '/', prefix siteBase (e.g., /Vaxogene)
    if (path.startsWith('/')) {
      return (siteBase || '') + path;
    }
    // Otherwise use the path relative to current page
    return path;
  }

  function runIncludes() {
    var scriptTag = document.currentScript || document.querySelector('script[src*="include.js"]');
    var siteBase = (scriptTag && scriptTag.getAttribute('data-site-base')) || '';

    var nodes = document.querySelectorAll('[data-include]');
    if (!nodes.length) {
      console.log('[include.js] No data-include elements found.');
      return;
    }
    console.log('[include.js] siteBase =', siteBase);
    nodes.forEach(function (node) {
      var raw = node.getAttribute('data-include');
      var url = resolvePath(raw, siteBase);
      console.log('[include.js] fetching:', url, '(from raw:', raw + ')');

      fetch(url, { cache: 'no-cache' })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status + ' fetching ' + url);
          return res.text();
        })
        .then(function (html) {
          node.outerHTML = html; // replace placeholder with real HTML
          console.log('[include.js] injected:', url);
        })
        .catch(function (err) {
          console.error('[include.js] Failed:', err);
        });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runIncludes);
  } else {
    runIncludes();
  }
})();
