const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function () {
  /*
  it("should return false if the horizontal word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the horizontal word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
  it("should return true if the vertical word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'LARRY');

    assert.isTrue(result);
  });
  it("should return false if the vertical word is not present", function() {
    const result = wordSearch([
      ['A','W','C','F','Q','U','A','L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');
    
    assert.isFalse(result);
  });
  it("should return true if the horizontal word is present backard", function() {
    const result = wordSearch([
      ['F','W','C','F','Q','U','A','L'],
      ['S','R','I','N','F','E','L','D'],
      ['Y','F','L','E','G','N','A','L'],
      ['H','M','J','N','E','V','R','G'],
      ['W','H','C','S','K','E','R','L'],
      ['B','F','R','E','N','E','Y','B'],
      ['U','B','T','W','A','P','A','I'],
      ['O','D','C','A','K','U','A','S'],
      ['E','Z','K','F','Q','U','A','L'],
    ], 'ANGEL');
  
    assert.isTrue(result);
  });
  it("should return false if the horizontal word is not present backard", function() {
    const result = wordSearch([
      ['F','W','C','F','Q','U','A','L'], 
      ['S','R','I','N','F','E','L','D'], 
      ['Y','F','A','F','Q','U','A','L'], 
      ['H','M','J','N','E','V','R','G'], 
      ['W','H','C','S','K','E','R','L'], 
      ['B','F','R','E','N','E','Y','B'],
      ['U','B','T','W','A','P','A','I'],
      ['O','D','C','A','K','U','A','S'],
      ['E','Z','K','F','Q','U','A','L'],
    ], 'TRAVIS');
    
    assert.isFalse(result);
  });
  it("should return true if the vertical word is present backard", function() {
    const result = wordSearch([
      ['F','W','C','F','Q','U','A','L'],
      ['S','R','I','N','F','E','L','D'],
      ['Y','F','L','E','Q','N','A','L'],
      ['H','M','J','N','E','V','R','G'],
      ['W','H','C','E','K','E','R','L'],
      ['B','F','R','K','N','E','Y','B'],
      ['U','B','T','I','A','P','A','I'],
      ['O','D','C','M','K','U','A','S'],
      ['E','Z','K','F','Q','U','A','L'],
    ], 'MIKE');
  
    assert.isTrue(result);
  });
  it("should return false if the vertical word is not present backard", function() {
    const result = wordSearch([
      ['F','W','C','F','Q','U','A','L'], 
      ['S','R','I','N','F','E','L','D'], 
      ['Y','F','A','F','Q','U','A','L'], 
      ['H','M','J','N','E','V','R','G'], 
      ['W','H','C','S','K','E','R','L'], 
      ['B','F','R','E','N','E','Y','B'],
      ['U','B','T','W','A','P','A','I'],
      ['O','D','C','A','K','U','A','S'],
      ['E','Z','K','F','Q','U','A','L'],
    ], 'TRAVIS');
    
    assert.isFalse(result);
  });
  */
  it("should return true if the diagonally word is present", function() {
    const result = wordSearch([
      ['F','W','C','F','Q','U','A','L'],
      ['S','R','I','N','F','E','L','D'],
      ['Y','F','A','F','Q','U','A','L'],
      ['H','M','J','N','E','V','R','G'],
      ['W','H','C','S','K','E','R','L'],
      ['B','F','R','E','N','E','Y','B'],
      ['U','B','T','W','A','P','A','I'],
      ['O','D','C','A','K','U','A','S'],
      ['E','Z','K','F','Q','U','A','L'],
    ], 'FRANK');
  
    assert.isTrue(result);
  });
  it("should return false if the diagonally word is not present", function() {
    const result = wordSearch([
      ['F','W','C','F','Q','U','A','L'], 
      ['S','R','I','N','F','E','L','D'], 
      ['Y','F','A','F','Q','U','A','L'], 
      ['H','M','J','N','E','V','R','G'], 
      ['W','H','C','S','K','E','R','L'], 
      ['B','F','R','E','N','E','Y','B'],
      ['U','B','T','W','A','P','A','I'],
      ['O','D','C','A','K','U','A','S'],
      ['E','Z','K','F','Q','U','A','L'],
    ], 'TRAVIS');
    
    assert.isFalse(result);
  });
});


