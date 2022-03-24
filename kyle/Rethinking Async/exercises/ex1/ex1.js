function fakeAjax(url, cb) {
  var fake_responses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text",
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log("Requesting: " + url);

  setTimeout(function () {
    cb(fake_responses[url]);
  }, randomDelay);
}

function output(text) {
  console.log(text);
}

// **************************************
// The old-n-busted callback way

let allResponses = [];

function handleResponses(file, text) {
  allResponses = allResponses.map((ele) =>
    ele.file === file ? { file, text } : ele
  );
  if (allResponses.filter((res) => res.text).length === 3) {
    console.log(allResponses);
    console.log("Complete");
  }
}

function getFile(file) {
  allResponses.push({ file });
  fakeAjax(file, function (text) {
    handleResponses(file, text);
  });
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
