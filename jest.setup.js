// Setup file that gets run at the beginning of jest tests. see jest.config.js setupFiles

// load global DOM document to use enzyme's mount()
require('jsdom-global/register')

// Fixes Error: matchMedia not present, legacy browsers require a polyfill
if (window) {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      }
    }
}
