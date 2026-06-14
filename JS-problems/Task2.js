// //
// Task 2: Longest Word in a Sentence
// Return the longest word from the given sentence.

// Example:
// "JavaScript makes you think" → "JavaScript"

function getStringLength(str) {
  let count = 0;

  for (let char of str) {
    count++;
  }
  return count;
}

function findLongestWorld(sente) {
  let currentword = "";
  let longestword = "";
  let word = "";

  for (let ch of sente) {
    if (ch != " ") {
      currentword += ch;
    } else {
      let currentwordlen = getStringLength(currentword);
      let longestwordlen = getStringLength(longestword);
      if (currentwordlen > longestwordlen) {
        longestword = currentword;
      }
      currentword = "";
    }
  }
  let currentwordlen = getStringLength(currentword);
  let longestwordlen = getStringLength(longestword);

  if (currentwordlen > longestwordlen) {
    longestword = currentword;
  }

  return longestword;
}

let sentence = "JavaScript makes you think";

console.log(findLongestWorld(sentence));
