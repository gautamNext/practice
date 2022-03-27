var removeDuplicates = function (nums) {
  let currEle;
  let uniqueElementEndPointer = 0;
  let i = 0;
  while (i < nums.length) {
    if (currEle !== nums[i]) {
      currEle = nums[i];
      nums[uniqueElementEndPointer] = currEle;
      uniqueElementEndPointer++;
    }
    i++;
  }

  return uniqueElementEndPointer;
};

// var removeDuplicates = function(nums) {
//     // left pointer tells where to put next unique number, and how
//     // many unique number we have seen 
//     let l = 0;  
  
//     // right pointer to loop through the array 
//     for (let r = 1; r < nums.length; r++) {
    
//       if (nums[l] === nums[r]) {  // go to next iteration 
//         continue;
//       }
      
//       //update the array 
//       nums[++l] = nums[r];
//     }
//     return l + 1; // since l start counting from 0
//   };

let arr = [1, 1, 2];

const num = removeDuplicates(arr);

console.log(num, arr);
