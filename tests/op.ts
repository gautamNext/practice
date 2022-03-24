

function binarySearch(nums, target, startIndex, endIndex) {
  const midIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
  if (target === nums[midIndex]) {
    return midIndex;
  } else if (target > nums[midIndex]) {
    return binarySearch(nums, target, midIndex + 1, endIndex);
  } else if (target < nums[midIndex]) {
    return binarySearch(nums, target, startIndex, midIndex - 1);
  }
  if (startIndex === endIndex) {
    return -1;
  }
}

var search = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

const result = search([-1,0,3,5,9,12], 2);
console.log(result);