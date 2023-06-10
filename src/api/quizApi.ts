import axios from "axios";

export type QuizDifficulty = 'easy' | 'medium' | 'hard'

export type Question = {
  category: string;
  type: string;
  difficulty: QuizDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

const quizApi = {
  getQuizQuestionsByCategoryId: async (
    categoryId: number,
    amount: number = 10,
    difficulty: QuizDifficulty = "easy",
    type: string = "multiple"
  ): Promise<Question[]> => {
    const response = await axios.get("https://opentdb.com/api.php", {
      params: {
        category: categoryId,
        amount,
        difficulty,
        type,
      },
    });
    return response.data.results;
  },
};

export default quizApi;
