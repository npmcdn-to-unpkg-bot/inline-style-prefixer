import getPrefixedValue from '../utils/getPrefixedValue'

const values = { 'zoom-in': true, 'zoom-out': true }

export default function zoomCursor({ property, value, browserInfo: { browser, version }, prefix: { css }, keepUnprefixed }) {
  if (
    property === 'cursor' && values[value] &&
    (
    browser === 'firefox' && version < 24 ||
    browser === 'chrome' && version < 37 ||
    browser === 'safari' && version < 9 ||
    browser === 'opera' && version < 24
    )
  ) {
    return {
      cursor: getPrefixedValue(css + value, value, keepUnprefixed)
    }
  }
}
