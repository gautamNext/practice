arr = [2, 4, 65, 7, 8, 6, 8, -9, 4, 5, -5, 6, 7];

function arrangeNegativeInLeft() {
  let indexForDivider = 0;
  let i = 0;
  while (i < arr.length) {
      if(arr[i] < 0){
          const temp = arr[i];
          arr[i] = arr[indexForDivider];
          arr[indexForDivider] = temp;
          indexForDivider++;
      }
    i++;
  }
}

arrangeNegativeInLeft();
console.log(arr);
