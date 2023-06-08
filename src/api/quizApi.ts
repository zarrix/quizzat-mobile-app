import axios from "axios";

export type Answer = {
  answer: string;
  isCorrect: boolean;
};

export type Question = {
  question: string;
  answers: Answer[];
};

export type QuizDifficulty = 'easy' | 'medium' | 'hard'

export type QuizQuestion = {
  category: string;
  type: string;
  difficulty: QuizDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
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
        isCorrect: false,
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
        isCorrect: false,
      },
    ],
  },
];

const quizApi = {
  getQuizQuestions: () => questions,
  getQuizQuestionsByCategoryId: async (
    categoryId: number,
    amount: number = 10,
    difficulty: QuizDifficulty = "easy",
    type: string = "multiple"
  ) => {
    const response = await axios.get("https://opentdb.com/api.php", {
      params: {
        categoryId,
        amount,
        difficulty,
        type,
      },
    });
    return response.data;
  },
};

export default quizApi;
