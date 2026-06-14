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
  if (n1 !== n2) {
    return false;
  }

  let used = [];

  for (let i = 0; i < n1; i++) {
    let found = false;

    for (let j = 0; j < n2; j++) {
      if (str1[i] === str2[j] && !used[j]) {
        used[j] = true;
        found = true;
        break;
      }
    }

    if (!found) {
      return false;
    }
  }

  return true;
}

console.log(Anagram("listen", "silent")); // true
console.log(Anagram("hello", "world")); // false
