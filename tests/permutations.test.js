const permutations = require("../src/ngrams/permutations");

const examples = [
  {
    input: 'Show me the code.',
    expected: [
      "Show", // 0
      "Show me", // 0 1
      "Show me the", // 0 1 2
      "Show me the code", // 0 1 2 3
      "me", // 1
      "me the", // 1 2
      "me the code", // 1 2 3
      "the", // 2
      "the code", // 2 3
      "code" // 3
    ]
  },
  {
    input: 'Show me the code ',
    expected: [
      "Show", // 0
      "Show me", // 0 1
      "Show me the", // 0 1 2
      "Show me the code", // 0 1 2 3
      "me", // 1
      "me the", // 1 2
      "me the code", // 1 2 3
      "the", // 2
      "the code", // 2 3
      "code" // 3
    ]
  }
]

test('tests multiple permutation cases', () => {
  for(const singleCase of examples) {
    expect(permutations(singleCase.input)).toStrictEqual(singleCase.expected);
  }
})