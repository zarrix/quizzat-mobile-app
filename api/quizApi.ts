export type Answer = {
  answer: string;
  isCorrect: boolean;
};

export type Question = {
  question: string;
  answers: Answer[];
};

const questions: Question[] = [
  {
    question: "David's father has three sons: Snap, Crackle, and _____?",
    answers: [
      {
        answer: "Snap",
        isCorrect: false,
      },
      {
        answer: "Crackle",
        isCorrect: false,
      },
      {
        answer: "John",
        isCorrect: false,
      },
      {
        answer: "David",
        isCorrect: true,
      },
    ],
  },
  {
    question: "It belongs to you, but your friends use it more. What is it?",
    answers: [
      {
        answer: "Name",
        isCorrect: true,
      },
      {
        answer: "Pen",
        isCorrect: false,
      },
      {
        answer: "Clothes",
        isCorrect: false,
      },
      {
        answer: "Voice",
        isCorrect: true,
      },
    ],
  },
  {
    question: "If you don't keep me, I'll break. What am I?",
    answers: [
      {
        answer: "Promise",
        isCorrect: true,
      },
      {
        answer: "Glass",
        isCorrect: false,
      },
      {
        answer: "Car",
        isCorrect: false,
      },
      {
        answer: "Leg",
        isCorrect: true,
      },
    ],
  },
];

const quizApi = {
    getQuizQuestions: () => questions,
}

export default quizApi;