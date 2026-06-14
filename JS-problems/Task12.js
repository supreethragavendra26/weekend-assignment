// Task 12: String Compression Using Counts
// Compress characters with their consecutive count.

// Example:
// "aaabbc" → "a3b2c1"

function getStringLength(str) {
  let count = 0;

  for (let char of str) {
    count++;
  }
  return count;
}

function compressString(str) {
  let len = getStringLength(str);

  let compressed = "";
  let count = 1;

  for (let i = 0; i < len; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed = compressed + str[i] + count;
      count = 1;
    }
  }

  return compressed;
}

console.log(compressString("aaabbc"));
console.log(compressString("abc"));
