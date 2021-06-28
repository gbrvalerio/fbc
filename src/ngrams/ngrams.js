const stripPunctuation = require("./stripPunctuation");

//returns the input words
//can be an array of words or a string
const parseInput = (input) => {
  if(Array.isArray(input)) {
    return input;
  }

  return stripPunctuation(input).split(' ')
}

const ngrams = (n, input) => {
  const words = parseInput(input);
  let result = [];
  for (let i = 0; i < words.length - (n - 1); i++) {
    result.push(words.slice(i, i + n).join(' '));
  }
  return result;
}

module.exports = ngrams;