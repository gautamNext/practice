// "abba"
// "01234567"
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  const seenCharacters = {
    // a: 0
    // b: 1
  };
  let left = 0;
  let max = 1;

  for (let index = 0; index < s.length; index++) {
    const char = s[index]; // 5(c) // 6(b)
    if (seenCharacters[char] >= left) {
      left = seenCharacters[char] + 1;
    }
    seenCharacters[char] = index;
    max = Math.max(max, index - left + 1);
  }

  return max;
};

const str = "abba";
const str2 = "abcabcbb";
const str3 = "abcabcdefghikk";
console.log("=================");
console.log(lengthOfLongestSubstring(str));
