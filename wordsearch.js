const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const backWard = letters;

  const diagonalSearch = (matrix, name) => {
    let fromSearch = "";
    let splitWord = name.split('');
    for (let items of matrix) {
      for (let i = 0; i < items.length; i++) {
        if (splitWord[i] && splitWord[i] === items[i]) {
          fromSearch += splitWord[i];
          break;
        }
        if (fromSearch === word) {
          return true;
        }
      }
    }
  };
    
  if (diagonalSearch(letters, word)) {
    return true;
  }
  // console.log(letters); // Question for mentor  why  letters still got mutated?
  const horizontalBack = backWard.map(ls => ls.reverse().join(''));
  const verticalBack = transpose(backWard).map(ls => ls.reverse().join(''));
  // console.log(letters); // When I made copy "backWard" for reverse() ??
  // console.log(horizontalBack);
  // console.log(verticalBack);

  let list = [...horizontalJoin, ...horizontalBack, ...verticalJoin, ...verticalBack];
  for (let each of list) {
    if (each.includes(word)) return true;
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
    