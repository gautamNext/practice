// kabad // cbba
var longestPalindrome = function (s) {
  let max = s.length ? 1 : 0;
  let result = "";

  for (let i = 0; i < s.length; i++) {
    // for odd cases
    let left = i,
      right = i;
    while (left > -1 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > max) {
        result = s.substring(left, right + 1);
        max = right - left + 1;
      }
      left--;
      right++;
    }

    // for even
    let leftEven = i,
      rightEven = i + 1;
    while (
      leftEven > -1 &&
      rightEven < s.length &&
      s[leftEven] === s[rightEven]
    ) {
      if (rightEven - leftEven + 1 > max) {
        result = s.substring(leftEven, rightEven + 1);
        max = rightEven - leftEven + 1;
      }
      leftEven--;
      rightEven++;
    }
  }

  return max;
};

console.log(longestPalindrome("kbbad"));
