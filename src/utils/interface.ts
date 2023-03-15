export interface IcategoryResponseData {
  trivia_categories: {
    id: number;
    name: string;
  }[];
}

export interface IquestionResponseData {
  response_code: number;
  results: {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }[];
}
