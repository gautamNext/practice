function merge(list1, list2) {
  let tempArr = [];
  let arr1Index = 0,
    arr2Index = 0;
  while (arr1Index < list1.length && arr2Index < list2.length) {
    if (list1[arr1Index] <= list2[arr2Index]) {
      tempArr.push(list1[arr1Index++]);
    } else {
      tempArr.push(list2[arr2Index++]);
    }
  }

  if (arr1Index < list1.length) {
    tempArr = [...tempArr, ...list1.slice(arr1Index)];
  }

  if (arr2Index < list2.length) {
    tempArr = [...tempArr, ...list2.slice(arr2Index)];
  }

  return tempArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const midIndex = Math.ceil(arr.length / 2);
  const part1 = mergeSort(arr.slice(0, midIndex));
  const part2 = mergeSort(arr.slice(midIndex));

  const result = merge(part1, part2);

  return result;
}

const sortedArray = mergeSort([5, 7, 2, 345,435,34,345,4,5,34, 1].filter((ele) => ele));

console.log(sortedArray);

// console.log(merge([4, 5, 7, 8], [1, 2, 94]));
