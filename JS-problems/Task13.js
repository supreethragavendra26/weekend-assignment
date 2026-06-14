// Task 13: Product of Numbers (Ignoring Zeros)
// Multiply all numbers except zero.

// Example:
// [2, 0, 4, 5] → 40

function productofNo(num) {
  let len = findlengthofarray(num);
  let sum = 1;
  for (let i = 0; i < len; i++) {
    let element = num[i];

    if (element != 0) {
      sum *= element;
    }
  }
  return sum;
}

function findlengthofarray(arr) {
  let count = 0;
  for (let c of arr) {
    count++;
  }
  return count;
}

const arr = [2, 0, 4, 5];

console.log(productofNo(arr));
