function isPalindrome(str, i, r) {
  if (i >= r) {
    return true;
  }
  if (str[i] !== str[r]) {
    return false;
  }

  if (str[i] === str[r]) {
    return isPalindrome(str, i + 1, r - 1);
  }
}

console.log("Hello", isPalindrome("Hello", 0, 4));
console.log("racecar", isPalindrome("racecar", 0, 6));
console.log("abccba", isPalindrome("abccba", 0, 5));
