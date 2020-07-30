const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const horizontalBack = letters.map(ls => ls.reverse().join(''));
  const verticalBack = transpose(letters).map(ls => ls.reverse().join(''));


  for (let h of horizontalJoin) {
    if (h.includes(word)) return true;
  }
  for (let v of verticalJoin) {
    if (v.includes(word)) return true;
  }
  for (let hb of horizontalBack) {
    if (hb.includes(word)) return true;
  }
  for (let vb of verticalBack) {
    console.log(vb);
    if (vb.includes(word)) return true;
  }
  return false;
  
};


module.exports = wordSearch;
    
// const checkDiagonally = (index) => {
//   if (word[index] && letters[index][index]) {
//     if (word[index] === letters[index][index]) checkDiagonally(index + 1);
//   }
// };
// if word[0] is found in x, y...word[++] is in x++, y++

// const isEqual = (word, letters) => {
//   if (word === letters) return true;
//   let keys = Object.keys(letters);
//   if (keys.length !== Object.keys(letters).length) return false;
//   return keys.every(k => isEqual(word[k], letters[k]));
// };




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
//   for (let x = 0; x < word.length; x++) {
//     if (checkDiagonally(x)) {
//       return true;
//     }
//   }
// recursion function,