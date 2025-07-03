import React from "react";

interface FeedbackSectionProps {
  concept: string;
  explanation: string;
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({ 
  concept, 
  explanation 
}) => {
  return (
    <div className="feedback-section">
      <p>Concept: {concept}</p>
      <p>Explanation: {explanation}</p>
    </div>
  );
};