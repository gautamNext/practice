const romanToInt = function (s) {
  const romanToDecimalMapper = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const prevDecValue = 0;
  const totalDecValue = 0;
  s.split("").forEach((romanChar) => {
    const currDecValue = romanToDecimalMapper[romanChar];
    if (prevDecValue < currDecValue) {
      prevDecValue = currDecValue - prevDecValue;
    } else {
      totalDecValue = totalDecValue + prevDecValue;
      prevDecValue = currDecValue;
    }
  });

  return totalDecValue + prevDecValue;
};
