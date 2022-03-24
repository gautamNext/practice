function getSanitizedParamsObject(paramsObj) {
  return Object.fromEntries(
    Object.entries(paramsObj).filter(
      ([, value]) =>
        value !== "" && value !== undefined && value !== null && value !== NaN // Should return entries for other falsy values like 0 and false.
    )
  );
}

function appendDomainWithSearchParams(searchParamsString) {
  const origin = "http://testurl.bitfinx.com/";
  return `${origin}?${searchParamsString}`;
}

function generateUrl(paramsObj) {
  const sanitizedParams = getSanitizedParamsObject(paramsObj);
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



// (function ($) {
//   /**
//    * Below Mapper reduces if-else lookups and makes code declarative and readable.
//    */
//   const volumeUnitToElementIdMapping = {
//     FIRSTCCY: "tickervolccy_0",
//     USD: "tickervolccy_USD",
//     BTC: "tickervolccy_BTC",
//     ETH: "tickervolccy_ETH",
//   };

//   /**
//    * Expects volumeUnit as i/p and returns corresponding dom node.
//    */
//   function getVolumeUnitElementNode(volumeUnit) {
//     const elementId = volumeUnitToElementIdMapping[volumeUnit];
//     if (elementId) {
//       return $(elementId);
//     }
//   }

//   /**
//    * VolumeSetup
//    */
//   function volumeSetup() {
//     // setup volume unit interface
//     let volumeUnit = window.APP.util
//       .getSettings("ticker_vol_unit")
//       .toUpperCase();

//     let element = getVolumeUnitElementNode(volumeUnit);
//     if (element) {
//       element.prop("checked", true);
//     }

//     return window.APP.util.initCurrenciesList();
//   }
// })($);
