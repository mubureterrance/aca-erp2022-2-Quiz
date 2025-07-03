import React from "react";

interface QuizControlsProps {
  onNext: () => void;
  showAnswer: boolean;
  isLastQuestion: boolean;
  currentQuestion: number;
  totalQuestions: number;
}

export const QuizControls: React.FC<QuizControlsProps> = ({
  onNext,
  showAnswer,
  isLastQuestion,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <div className="quiz-controls">
      <button
        onClick={onNext}
        disabled={!showAnswer}
        className={`next-btn ${!showAnswer ? "disabled" : ""}`}
      >
        {isLastQuestion ? "Finish Quiz" : "Next"}
      </button>
      <div className="progress">
        {currentQuestion} of {totalQuestions} questions
      </div>
    </div>
  );
};
