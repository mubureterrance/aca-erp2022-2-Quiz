import React from "react";
import { ScoreEntry } from "./Quiz/Types/quiz";

interface LeaderboardProps {
  scores: ScoreEntry[];
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
  return (
    <div>
      <h3>Leaderboard (Top 10)</h3>
      <ol className="leaderboard">
        {scores.map((entry, idx) => (
          <li key={idx}>
            {entry.percentage}% - {entry.score}/{entry.total} on{" "}
            {new Date(entry.date).toLocaleDateString()} by {entry.email}
          </li>
        ))}
      </ol>
    </div>
  );
};