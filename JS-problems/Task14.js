// Task 14:  Remove Falsy Values
// Falsy values: 0, "", false, null, undefined, NaN

// Example:
// [0, 1, "", "hi", null, 5] → [1, "hi", 5]

function findlengthofarray(arr) {
  let count = 0;
  for (let c of arr) {
    count++;
  }
  return count;
}

function RemoveFalsyValues(arr) {
  let n = findlengthofarray(arr);
  let result = [];

  for (let i = 0; i < n; i++) {
    const element = arr[i];

    if (element !== 0 && element !== "" && element !== null) {
      result.push(element);
    }
  }

  return result;
}

console.log(RemoveFalsyValues([0, 1, "", "hi", null, 5]));
