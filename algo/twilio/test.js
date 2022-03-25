async function fetchBarcodeDetails(barcode) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://jsonmock.hackerrank.com/api/inventory?barcode=${barcode}`
  );
  xhr.send();

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
    } else if (xhr.status === 404) {
      console.log("No records found");
    }
  };
}

async function getDiscountedPrice(barcode) {
  fetchBarcodeDetails(barcode)
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.error(err);
    });
}

console.log(getDiscountedPrice("12123"));
