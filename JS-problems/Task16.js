// Task 16: Median of Two Sorted Arrays
// Given two sorted arrays, compute and return the median of the merged sorted list.
// Example 1:
// nums1 = [1, 3], nums2 = [2] → 2
// Example 2:
// nums1 = [1, 2], nums2 = [3, 4] → 2.5

function mergetwoarr(num1, num2) {
  let i = 0;
  let j = 0;

  const mergearr = [];

  let len1 = findlengthofarray(num1);
  let len2 = findlengthofarray(num2);

  while (i < len1 && j < len2) {
    if (num1[i] <= num2[j]) {
      mergearr.push(num1[i]);
      i++;
    } else {
      mergearr.push(num2[j]);
      j++;
    }
  }

  while (i < num1.length) {
    mergearr.push(num1[i]);
    i++;
  }

  while (j < num2.length) {
    mergearr.push(num2[j]);
    j++;
  }

  return findmedian(mergearr);
}

function findmedian(arr) {
  let n = findlengthofarray(arr);

  if (n % 2 !== 0) {
    return arr[Math.floor(n / 2)];
  } else {
    let mid1 = arr[n / 2 - 1];
    let mid2 = arr[n / 2];

    return (mid1 + mid2) / 2;
  }
}

function findlengthofarray(arr) {
  let count = 0;
  for (let c of arr) {
    count++;
  }
  return count;
}

console.log(mergetwoarr([1, 3], [2])); // 2
console.log(mergetwoarr([1, 2], [3, 4])); // 2.5
