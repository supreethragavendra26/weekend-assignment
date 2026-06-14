// Task 17: Evaluate Mathematical Expression Without eval
// Evaluate a mathematical expression string supporting:
// +, -, *, /
// parentheses
// nested expressions
// operator precedence
// Example:
// "2 + 3 * (4 - 1)" → 11

function evaluate(exp) {
  let num = "";
  let result = 0;
  let sign = "+";

  for (let i = 0; i <= exp.length; i++) {
    if (i < exp.length && exp[i] >= "0" && exp[i] <= "9") {
      num += exp[i];
    } else if (
      exp[i] == "+" ||
      exp[i] == "-" ||
      exp[i] == "*" ||
      exp[i] == "/" ||
      i === exp.length
    ) {
      if (sign === "*") {
        result *= Number(num);
      } else if (sign === "+") {
        result += Number(num);
      } else if (sign === "/") {
        result /= Number(num);
      } else {
        result -= Number(num);
      }

      sign = exp[i];
      num = "";
    }
  }

  return result;
}
function parentheses(str) {
  let exp = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "(" && str[i] !== ")") {
      exp += str[i];
    }
  }

  return evaluate(exp);
}
console.log(evaluate("2+3-1")); // 4
console.log(evaluate("10+20-5")); // 25

let resnum = parentheses("(4-1)"); //3

let resstr = String(resnum);

console.log(evaluate(`2 + ${evaluate(`3 * ${resstr}`)}`));
