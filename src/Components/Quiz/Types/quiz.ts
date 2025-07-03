export interface QuizQuestion {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  ans: number;
  concept: string;
  explanation: string;
}

export interface QuizQuestionWithId extends QuizQuestion {
  id: string;
}

export interface ScoreEntry {
  uid: string;
  email: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
}
