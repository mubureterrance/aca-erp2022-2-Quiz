import React from "react";
import { QuizQuestion } from "./Quiz/Types/quiz";

interface QuestionDisplayProps {
  question: QuizQuestion;
  questionNumber: number;
  selectedAnswer: number | null;
  showAnswer: boolean;
  onAnswerClick: (answerNumber: number) => void;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  questionNumber,
  selectedAnswer,
  showAnswer,
  onAnswerClick
}) => {
  const getOptionClass = (optionNumber: number) => {
    if (!showAnswer) return "";
    if (optionNumber === question.ans) return "correct";
    if (optionNumber === selectedAnswer && optionNumber !== question.ans)
      return "incorrect";
    return "";
  };

  return (
    <div className="question-section">
      <h2>
        {questionNumber}. {question.question}
      </h2>
      <ul className="options-list">
        {[1, 2, 3, 4].map((optionNum) => (
          <li
            key={optionNum}
            className={`option ${getOptionClass(optionNum)}`}
            onClick={() => onAnswerClick(optionNum)}
            style={{
              cursor: showAnswer ? "default" : "pointer",
              opacity:
                showAnswer &&
                optionNum !== question.ans &&
                optionNum !== selectedAnswer
                  ? 0.6
                  : 1,
            }}
          >
            {question[`option${optionNum}` as keyof QuizQuestion]}
          </li>
        ))}
      </ul>
    </div>
  );
};