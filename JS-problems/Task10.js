// Task 10: Sum Only Numbers from a String
// Extract digits from a string and return their total.

// Example:
// "a12b3c7" → 22

function sumNumbers(str) {
  let sum = 0;
  let num = "";

  for (let ch of str) {
    if (ch >= "0" && ch <= "9") {
      num = num + ch;
    } else {
      if (num !== "") {
        sum = sum + Number(num);
        num = "";
      }
    }
  }

  if (num !== "") {
    sum += Number(num);
  }
  return sum;
}

console.log(sumNumbers("a12b3c7")); // 22
console.log(sumNumbers("a1b3c")); // 4
