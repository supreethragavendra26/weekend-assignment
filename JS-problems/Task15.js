// Task 15:  Balanced Brackets Checker
// Supports: (), {}, []

// Example:
// "{[()]}" → true "{[(])}" → false

function isBalanced(str) {
  let stack = [];

  for (let ch of str) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.pop() != "(") {
        return false;
      } else if (ch === "]") {
        if (stack.pop() != "[") {
          return false;
        }
      } else if (ch === "}") {
        if (stack.pop() != "{") {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
