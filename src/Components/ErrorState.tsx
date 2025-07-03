import React from "react";

interface ErrorStateProps {
  error: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  return (
    <div className="container">
      <h1>Error Loading Quiz</h1>
      <p style={{ color: "red" }}>{error}</p>
      <button onClick={() => window.location.reload()}>Retry</button>
    </div>
  );
};