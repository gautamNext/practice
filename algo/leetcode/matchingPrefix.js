var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  if (!prefix) {
    return "";
  }

  for (let i = 1; i < strs.length; i++) {
    const ele = strs[i];

    if (!ele) {
      prefix = "";
      break;
    }

    let matchTillIndex = 0;
    while (
      prefix.split("")[matchTillIndex] === ele.split("")[matchTillIndex] &&
      prefix.length > matchTillIndex
    ) {
      matchTillIndex++;
    }

    prefix = prefix.substring(0, matchTillIndex);
  }

  return prefix;
};

console.log(longestCommonPrefix(["ca", "ca", "cat"]));
