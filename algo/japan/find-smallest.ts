function solution(arr) {
  // write your code in JavaScript (Node.js 8.9.4)
  const reducedArrayWithUniqueAndValidValues = arr.reduce((acc, ele) => {
    if (ele > 0) {
      acc[ele] = ele;
    }

    return acc;
  }, []);

  if (reducedArrayWithUniqueAndValidValues.length) {
    for (
      let index = 1;
      index < reducedArrayWithUniqueAndValidValues.length;
      index++
    ) {
      if (!reducedArrayWithUniqueAndValidValues[index]) {
        return index;
      }
    }

    return reducedArrayWithUniqueAndValidValues.length; // In case all are consecutive numbers.
  }

  return 1; // default return in case no valid values exist
}

console.log(solution([-1, 1, 2, -3]));
