// Task 6: Anagram Checker (Ignore Case & Spaces)
// Check if two strings are anagrams.

// Example:
// "Listen" and "Silent" → true

function getStringLength(str) {
  let count = 0;

  for (let char of str) {
    count++;
  }
  return count;
}

function Anagram(str1, str2) {
  let n1 = getStringLength(str1);
  let n2 = getStringLength(str2);

  if (n1 != n2) {
    return false;
  } else {
  }
}

let str1 = "Listen";
let str2 = "Silent";

console.log(Anagram(str1, str2));
