import React from "react";
import { Leaderboard } from "./Leaderboard";
import { ScoreEntry } from "./Quiz/Types/quiz";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  leaderboard: ScoreEntry[];
  onReset: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  totalQuestions,
  leaderboard,
  onReset
}) => {
  const getScoreMessage = () => {
    const percent = (score / totalQuestions) * 100;
    if (percent >= 80) return "Excellent work!";
    if (percent >= 60) return "Good job!";
    if (percent >= 40) return "Not bad, keep practicing!";
    if (percent >= 30) return "You're getting there!";
    return "Keep studying and try again!";
  };

  return (
    <div className="container">
      <h1>Quiz Complete!</h1>
      <hr />
      <div className="result-section">
        <h2>
          You scored {score} out of {totalQuestions}
        </h2>
        <p className="score-message">{getScoreMessage()}</p>
        <div className="score-percentage">
          {Math.round((score / totalQuestions) * 100)}%
        </div>
        <button onClick={onReset} className="reset-btn">
          Take Quiz Again
        </button>
        <Leaderboard scores={leaderboard} />
      </div>
    </div>
  );
};