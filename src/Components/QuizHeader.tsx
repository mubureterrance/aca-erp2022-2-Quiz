import React from "react";

interface QuizHeaderProps {
  onReset: () => void;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({ onReset }) => {
  return (
    <div className="quiz-header">
      <h1>Quiz Me</h1>
      <button onClick={onReset} className="reset-btn-small">
        Reset Quiz
      </button>
    </div>
  );
};