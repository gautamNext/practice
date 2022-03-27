var addTwoNumbers = function (l1, l2) {
  const maxLength = Math.max(l1.length, l2.length);
  let remender = 0;
  const result = [];
  for (let index = 0; index < maxLength; index++) {
    if (l1.length > index && l2.length > index) {
      const sum = l1[index] + l2[index] + remender;
      if (sum >= 10) {
        remender = 1;
        result.push(sum % 10);
      } else {
        remender = 0;
        result.push(sum);
      }
    } else if (l1.length > index) {
      const sum = l1[index] + remender;
      if (sum >= 10) {
        remender = 1;
        result.push(sum % 10);
      } else {
        remender = 0;
        result.push(sum);
      }
    } else if (l2.length > index) {
      const sum = l2[index] + remender;
      if (sum >= 10) {
        remender = 1;
        result.push(sum % 10);
      } else {
        remender = 0;
        result.push(sum);
      }
    }
  }

  if (remender) {
    result.push(remender);
  }

  return result;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
