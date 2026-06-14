// Task 1: Remove Consecutive Duplicate Characters
// Remove repeated consecutive characters from a string.

// Example:
// "aaabbccdaa" → "abcda"
function getStringLength(str) {
  let count = 0;

  for (let char of str) {
    count++;
  }
  return count;
}

function removeDuplicates(str) {
  let result = "";

  let len = getStringLength(str);

  for (let i = 0; i < len; i++) {
    if (str[i] != str[i + 1]) {
      result += str[i];
    }
  }
  return result;
}

str = "aaabbb";

console.log(`INPUT->>>>>> ${str}`);

console.log(`OUPUT->>>>>> ${removeDuplicates(str)}`);
