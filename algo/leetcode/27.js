var removeElement = function (nums, val) {
  let i = 0;
  let j = nums.length - 1;
  let counter = 0;
  while (i < nums.length && i < j) {
    if (nums[i] === val) {
      while (j > i) {
        if (nums[j] !== val) {
          nums[i] = nums[j];
          j--;
          break;
        }
        j--;
        counter++;
      }
    }
    counter++;
    i++;
  }
  console.log("counter", counter);
  return nums[j] === val ? j : j + 1;
};

var removeElement2 = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

const arr = [1, 2, 2, 3];

const num = removeElement(arr, 3);

console.log(num, arr); // 5
