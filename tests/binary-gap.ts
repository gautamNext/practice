function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  const binaryString = N.toString(2);
  let binaryGap = 0;
  let lastIndexOfOne;
  binaryString.split("").forEach((ele, index) => {
    if (Number(ele) === 1 && lastIndexOfOne === undefined) {
      lastIndexOfOne = index;
    } else if (Number(ele) === 1) {
      const currentGap = index - lastIndexOfOne - 1
      if (currentGap > binaryGap) {
        binaryGap = currentGap;
      }
      lastIndexOfOne = index;
    }
  });

  return binaryGap;
}

console.log(solution(561892));
