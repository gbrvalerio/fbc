//replace all chars/matches/words that are not in set [\w (words/alphanumeric) and \s (whitespaces)]
const stripPunctuation = input => input.replace(/[^\w\s]/ig, '');

module.exports = stripPunctuation;