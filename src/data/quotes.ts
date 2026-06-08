// REFACTORED
export interface Quote {
  text: string;
  author: string;
}

export const quotes: Quote[] = [
  { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler',
  },
  {
    text: 'Programs must be written for people to read, and only incidentally for machines to execute.',
    author: 'Harold Abelson',
  },
  { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
  { text: 'Simplicity is prerequisite for reliability.', author: 'Edsger W. Dijkstra' },
  { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
  { text: 'The best error message is the one that never shows up.', author: 'Thomas Fuchs' },
  {
    text: 'Code is like humor. When you have to explain it, it’s bad.',
    author: 'Cory House',
  },
];
