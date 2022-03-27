var searchInsert = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    let mid = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      if (endIndex === startIndex) return startIndex;

      endIndex = mid;
    } else {
      startIndex = mid + 1;
    }
  }

  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 5));
