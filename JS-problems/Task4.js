// Task 4: Number to Digits Array
// Convert a number into an array of its digits.

// Example:
// 49213 → [4, 9, 2, 1, 3]

function NotoDig(num) {
  const arr = [];

  while (num != 0) {
    let lastdigit = num % 10;
    arr.push(lastdigit);
    num = Math.floor(num / 10);
  }
  return arr;
}

function reversearr(arr) {
  const reversearr = [];
  let len = findlengthofarray(arr);
  for (let i = len - 1; i >= 0; i--) {
    reversearr.push(arr[i]);
  }

  return reversearr;
}

function findlengthofarray(arr) {
  let count = 0;
  for (let c of arr) {
    count++;
  }
  return count;
}

console.log(reversearr(NotoDig(49213)));
