// Task 3: Array Intersection (No Set Allowed)
// Return elements that appear in both arrays.

// Example:
// [1, 2, 3, 4] and [2, 4, 6] → [2, 4]

function findlengthofarray(arr) {
  let count = 0;
  for (let c of arr) {
    count++;
  }
  return count;
}

function ArrayIntersection(arr1, arr2) {
  const resarr = [];

  let arrleng1 = findlengthofarray(arr1);
  let arrleng2 = findlengthofarray(arr2);

  for (let i = 0; i < arrleng1; i++) {
    for (let j = 0; j < arrleng2; j++) {
      if (arr1[i] == arr2[j]) {
        resarr.push(arr1[i]);
      }
    }
  }

  return resarr;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4, 6];

console.log(ArrayIntersection(arr1, arr2));
