/**
 * Returns copy of searchParamsObj with only valid fields from passed on searchParamsObj
 */
function getSanitizedParamsObject(searchParamsObj) {
  return Object.fromEntries(
    Object.entries(searchParamsObj).filter(
      ([, value]) =>
        value !== "" && value !== undefined && value !== null && value !== NaN // Should return entries for other falsy values like 0 and false.
    )
  );
}

function appendDomainWithSearchParams(searchParamsString) {
  const origin = "http://testurl.bitfinx.com/";
  return `${origin}?${searchParamsString}`;
}

/**
 * Takes searchParamsObj and Returns full url along with query strings
 */
function generateUrl(searchParamsObj) {
  const sanitizedParams = getSanitizedParamsObject(searchParamsObj);
  const searchParams = new URLSearchParams(sanitizedParams);
  return appendDomainWithSearchParams(searchParams.toString());
}

const fullUrl = generateUrl({
  width: 360,
  height: 300,
  locale: "en",
  toolbar_bg: "",
  interval: "3h",
  pair: "BTC_USD",
});

console.log(fullUrl);

(function ($) {
  /**
   * Below Mapper reduces if-else lookups and makes code declarative and readable.
   */
  const volumeUnitToElementIdMapping = {
    FIRSTCCY: "tickervolccy_0",
    USD: "tickervolccy_USD",
    BTC: "tickervolccy_BTC",
    ETH: "tickervolccy_ETH",
  };

  /**
   * Expects volumeUnit as i/p and returns corresponding dom node.
   */
  function getVolumeUnitElementNode(volumeUnit) {
    const elementId = volumeUnitToElementIdMapping[volumeUnit];
    if (elementId) {
      return $(elementId);
    }
  }

  /**
   * Setup volume unit interface
   */
  function volumeSetup() {
    let volumeUnit = window.APP.util
      .getSettings("ticker_vol_unit")
      .toUpperCase();

    let element = getVolumeUnitElementNode(volumeUnit);
    if (element) {
      element.prop("checked", true);
    }

    return window.APP.util.initCurrenciesList();
  }
})($);
