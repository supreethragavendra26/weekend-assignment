// Task 7: First Non-Repeating Character
// Return the first character that does not repeat.

// Example:
// "swiss" → "w" "aabb" → null

function firstNonRepeating(str) {
  let freq = {};

  for (let ch of str) {
    if (freq[ch]) {
      freq[ch]++;
    } else {
      freq[ch] = 1;
    }
  }

  for (let ch of str) {
    if (freq[ch] === 1) {
      return ch;
    }
  }

  return null;
}

console.log(firstNonRepeating("swiss")); // w
console.log(firstNonRepeating("aabb")); // null
