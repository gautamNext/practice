/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) { // [-1,0,1,2,-1,-4]
    const negatives = nums.filter((ele) => ele < 0); // [-1, -1, -4] // 2
    const zeros = nums.filter((ele) => ele === 0); // [0]
    const positives = nums.filter((ele) => ele > 0); // [1, 2]
    
    const maxPossibleValues =  
};