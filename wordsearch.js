const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  //   console.log(verticalJoin);
  // console.log(horizontalJoin)
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let k of verticalJoin) {
    if (k.includes(word)) return true;
  }
    
  return false;
};

module.exports = wordSearch;

const transpose = (letters) => {
  const rows = letters.length;
  const cols = letters[0].length;
  const grid = [];
    
  for (let j = 0; j < cols; j++) {
    grid[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[j][i] = letters[i][j];
    }
  }
  return grid;
};
/*
Given a matrix (2D array)
Given a word (string)
Find the word in the matrix (horizontally / vertically)
get all the char of a row, check if match with word // loop row
get all the char of a col, check if match with word // loop col
if found, return true
if not found, return false
*/


// For this challenge, you'll be implementing a word search solver, as a function that receives a 2D array of letters and a word. The function must:

// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found
// NOTE: You do not need to check to see if a word is written backwards or diagonally.

// This challenge comes with some initial (buggy!) code. We suggest approaching this problem with a TDD mindset, meaning "write tests, make the tests pass, repeat!".

// There are already some tests in ./test/test_wordsearch.js, and you can run the tests with npm test. You'll find that one of the tests doesn't pass yet, so you'll want to start by editing the code in wordsearch.js to allow the tests to pass.

// When the present tests are successful, ask yourself, "Do the current tests cover all the possible cases?" What if the word is written vertically, not horizontally? What about the case where the word matrix is an empty array? You'll have to write tests for these cases (and any others that you think of), and you might also have to modify the wordSearch function to make those new tests pass.

//     let diaArray = [];
//     let wordLength = word.length;
//   let splitWord = word.split('');
//   for (let a = 0; a < letters.length; a++) {
//     let diaWord = "";
//     for (let b = 0; b < letters[a].length; b++) {
//         if (splitWord[a] === letters[a][b]) {
//           // need some code here to make sure only diag is being compaired?
//         return true;
//       }
//     }
//     // console.log(diaWord);
//   }