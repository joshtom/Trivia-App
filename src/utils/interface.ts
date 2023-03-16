export interface IcategoryResponseData {
  trivia_categories: {
    id: number | string;
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

export interface QuizViewProps {
  username: string;
  children: React.ReactNode;
  handleInstruction?: () => void;
  loading?: any;
}

export interface Option {
  label: string | number;
  value: string | number;
}

export interface SelectProps {
  options: Option[];
  label?: string;
  //   onChange?: (value: Option) => void;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  value: any;
}
