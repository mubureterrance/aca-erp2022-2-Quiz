import React from "react";

export const LoadingState: React.FC = () => {
  return (
    <div className="container">
      <h1>Loading Quiz...</h1>
      <p>Fetching questions from Firebase...</p>
    </div>
  );
};