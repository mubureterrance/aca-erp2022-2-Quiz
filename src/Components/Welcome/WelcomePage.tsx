import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css"; // optional styling file

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to ACA Quiz!</h1>
      <p>Put your knowledge to the test and see how sharp you are.</p>
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  );
};

export default WelcomePage;
