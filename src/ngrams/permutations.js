const stripPunctuation = require("./stripPunctuation");

//returns the input words
//can be an array of words or a string
const parseInput = (input) => {
  if(Array.isArray(input)) {
    return input;
  }

  return stripPunctuation(input).trim().split(' ')
}

const permutations = (input, offset = 0) => {
  const words = parseInput(input);

  if(offset >= words.length) {
    return [];
  }

  let result = []

  for(let i = offset; i < (words.length - 1 + 1); i++) {
    result.push(
      words.slice(offset, i + 1).join(' ')
    )
  }

  return result.concat(
    permutations(words, offset + 1)
  );
}

module.exports = permutations;