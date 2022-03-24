function evaluate(el1, el2, operator) {
  switch (operator) {
    case "+":
      return el1 + el2;
    case "-":
      return el1 - el2;
    case "*":
      return el1 * el2;
    case "/":
      return el1 / el2;
    case "^":
      return Math.pow(el1, el2);
    default:
      break;
  }
}

function postFixEvaluation(expr) {
  if (expr) {
    const splittedArray = expr.split("");
    
    const result = postFixEvaluation(`${evaluate(el1, el2, operator)}${rest}`);
    console.log(result);
    return result;
  }
}

const result = postFixEvaluation("35*62/+4-");
console.log(result);
