// Task 9: Rotate Array by K Positions
// Perform right rotation by K positions.

// Example:
// [1,2,3,4,5], K = 2 → [4,5,1,2,3]
function findlengthofarray(arr) {
  let count = 0;
  for (let c of arr) {
    count++;
  }
  return count;
}

function rotate(arr, k) {
  let n = findlengthofarray(arr);
  for (let r = 0; r < k; r++) {
    let last = arr[n - 1];

    for (let i = n - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }

    arr[0] = last;
  }

  return arr;
}

console.log(rotate([1, 2, 3, 4, 5], 1));
// [5,1,2,3,4]

console.log(rotate([1, 2, 3, 4, 5], 2)); // [4,5,1,2,3]

console.log(rotate([10, 20, 30], 3));
// [10,20,30]
