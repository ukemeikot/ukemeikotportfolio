// REFACTORED
export interface QuizQuestion {
  code: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const quiz: QuizQuestion[] = [
  {
    code: 'console.log([1, 2, 3] + [4, 5, 6]);',
    options: ['1,2,34,5,6', '[5, 7, 9]', '5,7,9', 'NaN'],
    answer: 0,
    explanation: 'The + operator coerces both arrays to strings ("1,2,3" + "4,5,6") and concatenates them.',
  },
  {
    code: 'console.log(typeof NaN);',
    options: ['"NaN"', '"number"', '"undefined"', '"object"'],
    answer: 1,
    explanation: 'NaN is a special value of the Number type, so typeof returns "number".',
  },
  {
    code: 'console.log(0.1 + 0.2 === 0.3);',
    options: ['true', 'false', '"0.3"', 'NaN'],
    answer: 1,
    explanation: 'Floating-point math gives 0.30000000000000004, so the strict equality is false.',
  },
  {
    code: 'console.log([] == ![]);',
    options: ['true', 'false', 'TypeError', 'undefined'],
    answer: 0,
    explanation: '![] is false, then [] == false coerces both to 0, so the comparison is true.',
  },
  {
    code: 'console.log(typeof null);',
    options: ['"null"', '"object"', '"undefined"', '"number"'],
    answer: 1,
    explanation: 'A long-standing JS quirk: typeof null is "object".',
  },
  {
    code: 'console.log(3 > 2 > 1);',
    options: ['true', 'false', '1', 'TypeError'],
    answer: 1,
    explanation: '3 > 2 is true (1), then 1 > 1 is false.',
  },
  {
    code: "console.log('5' - 2);",
    options: ['3', '52', 'NaN', 'TypeError'],
    answer: 0,
    explanation: 'The - operator forces numeric coercion, so "5" becomes 5 and 5 - 2 is 3.',
  },
  {
    code: 'console.log([1, 2, 3].map(parseInt));',
    options: ['[1, 2, 3]', '[1, NaN, NaN]', '[NaN, NaN, NaN]', '[1, 2, NaN]'],
    answer: 1,
    explanation: 'map passes (value, index), so parseInt gets radixes 0, 1, 2 — yielding 1, NaN, NaN.',
  },
];
