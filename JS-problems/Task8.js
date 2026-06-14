// Task 8: Chunk Array into Groups
// Split an array into subarrays of size N.

// Example:
// [1, 2, 3, 4, 5], N = 2 → [[1,2], [3,4], [5]]

function findlengthofarray(arr) {
  let count = 0;
  for (let c of arr) {
    count++;
  }
  return count;
}

function chunkarr(arr, n) {
  let lenarr = findlengthofarray(arr);

  let resarr = [];
  let temparr = [];

  for (let i = 0; i < lenarr; i++) {
    temparr.push(arr[i]);

    let templen = findlengthofarray(temparr);

    if (templen == n) {
      resarr.push(temparr);
      temparr = [];
    }
  }
  resarr.push(temparr);

  return resarr;
}

console.log(chunkarr([1, 2, 3, 4, 5], 2));
