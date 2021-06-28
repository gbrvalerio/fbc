const ngrams = require("../src/ngrams/ngrams");

const examples = [
  {
    input: [1, 'Show me the code.'],
    expected: [
      "Show",
      "me",
      "the",
      "code"
    ]
  },
  {
    input: [2, 'Show me the code.'],
    expected: [
      "Show me",
      "me the",
      "the code"
    ]
  },
  {
    input: [3, 'Show me the code.'],
    expected: [
      "Show me the",
      "me the code",
    ]
  },
  {
    input: [4, 'Show me the code.'],
    expected: [
      "Show me the code"
    ]
  }
]

test('tests multiple ngram cases', () => {
  for(const singleCase of examples) {
    expect(ngrams(...singleCase.input)).toStrictEqual(singleCase.expected);
  }
})