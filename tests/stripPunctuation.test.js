const stripPunctuation = require("../src/ngrams/stripPunctuation")

const cases = [
  {
    input: 'Show me the code.',
    expected: 'Show me the code'
  },
  {
    input: '!Show? me the code.',
    expected: 'Show me the code'
  },
  {
    input: 'Hello! 911?',
    expected: 'Hello 911'
  },
  {
    input: 'Hello 911',
    expected: 'Hello 911'
  },
  {
    input: 'Hello 911',
    expected: 'Hello 911'
  },
  {
    input: '!@#',
    expected: ''
  },
  {
    input: '-456',
    expected: '456'
  }
]

test('tests multiple strip ponctuation cases', () => {
  for(const singleCase of cases) {
    expect(stripPunctuation(singleCase.input)).toBe(singleCase.expected);
  }
})