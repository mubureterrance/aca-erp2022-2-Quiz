import React, { useState } from "react";
import "./Quiz.css";
import { data } from "../../Data";
import { useLocalStorage } from "../Quiz/hooks/useLocalStorage";
import { useQuizProgress } from "../Quiz/hooks/useQuizProgress";
import { useQuestionPerformance } from "../Quiz/hooks/useQuestionPerformance";

// Type definition for strong typing of each question
interface QuizQuestion {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  ans: number;
}

const quizData: QuizQuestion[] = data; //wraps imported data into a strictly typed array of questions

const Quiz: React.FC = () => {
  //check if localStorage works
  //get existing saved data
  // track per-question correct/incorrect
  const { isAvailable, safelyGet } = useLocalStorage();
  const { trackPerformance } = useQuestionPerformance();

  // lazy initializers to avoid refresh reset
  //initializes index from saved progress immediately **prevents “flash of question 1” on reload
  const [index, setIndex] = useState<number>(() => {
    if (!isAvailable()) return 0;
    const saved = safelyGet("quizProgress", null);
    return saved ? saved.index : 0;
  });
  // initializes score from saved progress
  const [score, setScore] = useState<number>(() => {
    if (!isAvailable()) return 0;
    const saved = safelyGet("quizProgress", null);
    return saved ? saved.score : 0;
  });
  // initializes selected answer from saved progress
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(() => {
    if (!isAvailable()) return null;
    const saved = safelyGet("quizProgress", null);
    return saved ? saved.selectedAnswer : null;
  });
  //initializes showAnswer (whether to revealed feedback)
  const [showAnswer, setShowAnswer] = useState<boolean>(() => {
    if (!isAvailable()) return false;
    const saved = safelyGet("quizProgress", null);
    return saved ? saved.showAnswer : false;
  });
  //a simple state to know if the quiz is completed
  const [showResult, setShowResult] = useState<boolean>(false);

  const [leaderboard, setLeaderboard] = useState<{
     score: number; total: number; percentage: number; date: string }[]>([]);


  // hook to handle saving whenever anything changes
  useQuizProgress(
    index,
    score,
    selectedAnswer,
    showAnswer,
    setIndex,
    setScore,
    setSelectedAnswer,
    setShowAnswer
  );
  // safe fallback if there’s no data (fail gracefully)
  if (!quizData || quizData.length === 0) {
    return (
      <div className="container">
        <h1>No quiz data available</h1>
      </div>
    );
  }

  const currentQuestion = quizData[index]; //derive the current question,
  const isLastQuestion = index === quizData.length - 1; //check if question is the last one

  /**only allow one click per question
   * record which answer was chosen
   * reveal correct/incorrect
   */

  const handleAnswerClick = (answerNumber: number) => {
    if (showAnswer) return;
    setSelectedAnswer(answerNumber);
    setShowAnswer(true);

    /**if correct, bump up the score
     * log performance to localStorage
     */
    const isCorrect = currentQuestion.ans === answerNumber;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    trackPerformance(index, isCorrect);
  };

  const handleNext = () => {
    if (!showAnswer) return; //don’t do anything if no answer shown

    if (isLastQuestion) {
      setShowResult(true); //if it’s the last question show results
      saveScore(score);
      
      // load leaderboard data
      if (isAvailable()) {
        const scores = safelyGet("quizScores", []);
        setLeaderboard(scores);
      }
    } else {
      setIndex((prev) => prev + 1); //otherwise move to next question and reset
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  //resets the entire quiz, and clears saved progress in localStorage
  const handleReset = () => {
    setIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setShowResult(false);

    if (isAvailable()) {
      localStorage.removeItem("quizProgress");
    }
  };

  /**saves a history of your best scores
   * keeps only the top 10
   *
   */
  const saveScore = (finalScore: number) => {
    if (!isAvailable()) return;
    const scores = safelyGet("quizScores", []);
    scores.push({
      score: finalScore,
      total: quizData.length,
      percentage: Math.round((finalScore / quizData.length) * 100),
      date: new Date().toLocaleDateString(),
    });
    scores.sort((a: any, b: any) => b.percentage - a.percentage);
    localStorage.setItem("quizScores", JSON.stringify(scores.slice(0, 10)));
  };

  //decides which class to apply (correct or incorrect)
  const getOptionClass = (optionNumber: number) => {
    if (!showAnswer) return "";
    if (optionNumber === currentQuestion.ans) return "correct";
    if (optionNumber === selectedAnswer && optionNumber !== currentQuestion.ans)
      return "incorrect";
    return "";
  };

  const getScoreMessage = () => {
    const percent = (score / quizData.length) * 100;
    if (percent >= 80) return "Excellent work!";
    if (percent >= 60) return "Good job!";
    if (percent >= 40) return "Not bad, keep practicing!";
    if (percent >= 30) return "You're getting there!";
    return "Keep studying and try again!";
  };

  //displays the results page if the quiz is finished
  if (showResult) {
    return (
      <div className="container">
        <h1>Quiz Complete!</h1>
        <hr />
        <div className="result-section">
          <h2>
            You scored {score} out of {quizData.length}
          </h2>
          <p className="score-message">{getScoreMessage()}</p>
          <div className="score-percentage">
            {Math.round((score / quizData.length) * 100)}%
          </div>
          <button onClick={handleReset} className="reset-btn">
            Take Quiz Again
          </button>

          <h3>Leaderboard (Top 10)</h3>
          <ol className="leaderboard">
            {leaderboard.map((entry, idx) => (
              <li key={idx}>
                {entry.percentage}% - {entry.score}/{entry.total} on {entry.date}
              </li>
            ))}
          </ol>

        </div>
      </div>
    );
  }

  //the normal question view
  //shows the options, buttons, question count
  return (
    <div className="container">
      <h1>Quiz Me</h1>
      <hr />
      <div className="question-section">
        <h2>
          {index + 1}. {currentQuestion.question}
        </h2>
        <ul className="options-list">
          {[1, 2, 3, 4].map((optionNum) => (
            <li
              key={optionNum}
              className={`option ${getOptionClass(optionNum)}`}
              onClick={() => handleAnswerClick(optionNum)}
              style={{
                cursor: showAnswer ? "default" : "pointer",
                opacity:
                  showAnswer &&
                  optionNum !== currentQuestion.ans &&
                  optionNum !== selectedAnswer
                    ? 0.6
                    : 1,
              }}
            >
              {currentQuestion[`option${optionNum}` as keyof QuizQuestion]}
            </li>
          ))}
        </ul>
        <div className="quiz-controls">
          <button
            onClick={handleNext}
            disabled={!showAnswer}
            className={`next-btn ${!showAnswer ? "disabled" : ""}`}
          >
            {isLastQuestion ? "Finish Quiz" : "Next"}
          </button>
          <div className="progress">
            {index + 1} of {quizData.length} questions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
