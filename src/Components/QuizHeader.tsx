import React from "react";
import LogoutButton from "./Welcome/LogoutButton";

interface QuizHeaderProps {
  onReset: () => void;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({ onReset }) => {
  return (
    <div className="quiz-header">
      <h1>ACA QUIZ</h1>
      <button onClick={onReset} className="reset-btn-small">
        Reset Quiz
      </button>
      <LogoutButton />
    </div>
  );
};