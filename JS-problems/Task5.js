// Task 5: Element Frequency Counter
// Return an object with element → count mappings.

// Example:
// ["a", "b", "a", "c", "b", "a"] → { a: 3, b: 2, c: 1 }

function findlengthofarray(arr) {
  let count = 0;
  for (let c of arr) {
    count++;
  }
  return count;
}

function frequencyCounter(arr) {
  let freq = {};

  let len = findlengthofarray(arr);
  for (let i = 0; i < len; i++) {
    let element = arr[i];

    if (freq[element]) {
      freq[element] += 1;
    } else {
      freq[element] = 1;
    }
  }

  return freq;
}

const arr = ["a", "b", "a", "c", "b", "a"];

console.log(frequencyCounter(arr));
