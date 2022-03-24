// Precedence for operators

/*
    +,-         1 L-R
    *,/         2 L-R
    ^           3 R-L
    -,*,log     4 R-L
    (,)         5 L-R
*/

function getPrecedence(char) {
//   console.log("---------------", char);
  if (["+", "-"].includes(char)) {
    return 1;
  } else if (["*", "/"].includes(char)) {
    return 2;
  } else if (["^"].includes(char)) {
    return 3;
  } else {
    return 4;
  }
}

function isOperator(char) {
  return "+-*/^".includes(char);
}

function Stack() {
  const stack = [];
  this.lastElement = () => stack[stack.length - 1];

  this.push = (ele) => {
    stack.push(ele);
  };

  this.pop = () => {
    if (stack.length !== 0) {
      const ele = stack[stack.length - 1];
      stack.length = stack.length - 1;
      return ele;
    }
  };
}

function infixToPostFix(expr) {
  const stack = new Stack();
  let postFixExpr = "";
  let index = 0;
  while (index < expr.length) {
    const char = expr[index];
    if (isOperator(char)) {
      if (stack.lastElement()) {
        const precedenceIncomingChar = getPrecedence(char);
        const precedenceStackEle = getPrecedence(stack.lastElement());
        if (precedenceIncomingChar <= precedenceStackEle) {
          const lastEle = stack.pop();
          postFixExpr = `${postFixExpr}${lastEle}`;
        
        } else {
          stack.push(char);
          index++;
        }
      } else {
        stack.push(char);
        index++;
      }
    } else {
      postFixExpr = `${postFixExpr}${char}`;
      index++;
    }
  }

  while(stack.lastElement()){
      const ele = stack.pop();
      postFixExpr = `${postFixExpr}${ele}`
  }

  return postFixExpr;
}

console.log(infixToPostFix("a+b*c-d/e"));
