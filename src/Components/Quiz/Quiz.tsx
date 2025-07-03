// Main Quiz.tsx (simplified)
import React, { useState } from "react";
import "./Quiz.css";
import { useQuizData } from "./hooks/useQuizData";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useQuizProgress } from "./hooks/useQuizProgress";
import { useQuestionPerformance } from "./hooks/useQuestionPerformance";
import { useAuth } from "../Auth/hooks/AuthProvider";
import { QuizHeader } from "../QuizHeader";
import { QuestionDisplay } from "../QuestionDisplay";
import { FeedbackSection } from "../FeedbackSection";
import { QuizControls } from "../QuizControls";
import { QuizResults } from "../QuizResults";
import { ResetConfirmationDialog } from "../ResetConfirmationDialog";
import { LoadingState } from "../LoadingState";
import { ErrorState } from "../ErrorState";
import { saveScoreToFirestore, fetchLeaderboardFromFirestore } from "../../Services/quizService";
import { ScoreEntry } from "./Types/quiz";

const Quiz: React.FC = () => {
  const { user } = useAuth();
  const { quiz: quizData, loading, error } = useQuizData();
  const { isAvailable, safelyGet } = useLocalStorage();
  const { trackPerformance } = useQuestionPerformance();
  
  const savedProgress = user && isAvailable() 
    ? safelyGet(`quizProgress_${user.uid}`, null) 
    : null;

  const [index, setIndex] = useState(() => savedProgress?.index ?? 0);
  const [score, setScore] = useState(() => savedProgress?.score ?? 0);
  const [selectedAnswer, setSelectedAnswer] = useState(() => savedProgress?.selectedAnswer ?? null);
  const [showAnswer, setShowAnswer] = useState(() => savedProgress?.showAnswer ?? false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [leaderboard, setLeaderboard] = useState<ScoreEntry[]>([]);
  const [showResetConfirmation, setShowResetConfirmation] = useState<boolean>(false);

  useQuizProgress(user, index, score, selectedAnswer, showAnswer, setIndex, setScore, setSelectedAnswer, setShowAnswer);

  // Authentication check
  if (!user) {
    return (
      <div className="container">
        <h2>Please log in to start the quiz</h2>
      </div>
    );
  }

  // Loading state
  if (loading) return <LoadingState />;
  
  // Error state
  if (error) return <ErrorState error={error} />;
  
  // No data state
  if (!quizData || quizData.length === 0) {
    return (
      <div className="container">
        <h1>No Quiz Data Available</h1>
        <p>No questions found in the database.</p>
      </div>
    );
  }

  const currentQuestion = quizData[index];
  const isLastQuestion = index === quizData.length - 1;

  const handleAnswerClick = (answerNumber: number) => {
    if (showAnswer) return;
    setSelectedAnswer(answerNumber);
    setShowAnswer(true);

    if (currentQuestion.ans === answerNumber) {
      setScore((prev: number) => prev + 1);
    }

    trackPerformance(index, currentQuestion.ans === answerNumber);
  };

  const handleNext = async () => {
    if (!showAnswer) return;

    if (isLastQuestion) {
      setShowResult(true);
      await saveScore(score);
      await loadLeaderboard();
    } else {
      setIndex((prev: number) => prev + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const saveScore = async (finalScore: number) => {
    const scoreEntry: ScoreEntry = {
      uid: user.uid,
      email: user.email,
      score: finalScore,
      total: quizData.length,
      percentage: Math.round((finalScore / quizData.length) * 100),
      date: new Date().toISOString(),
    };

    // Save to localStorage
    const scores = safelyGet("quizScores", []);
    scores.push(scoreEntry);
    scores.sort((a: any, b: any) => b.percentage - a.percentage);
    localStorage.setItem("quizScores", JSON.stringify(scores.slice(0, 10)));

    // Save to Firestore
    try {
      await saveScoreToFirestore(scoreEntry);
    } catch (err) {
      console.error("Failed to save to Firestore:", err);
    }
  };

  const loadLeaderboard = async () => {
    try {
      const data = await fetchLeaderboardFromFirestore();
      setLeaderboard(data);
    } catch (err) {
      const localScores = safelyGet("quizScores", []);
      setLeaderboard(localScores);
    }
  };

  const handleReset = () => {
    setIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setShowResult(false);
    setShowResetConfirmation(false);

    if (isAvailable()) {
      localStorage.removeItem(`quizProgress_${user.uid}`);
    }
  };

  const handleResetClick = () => {
    if (showResult || (index === 0 && score === 0 && !showAnswer)) {
      handleReset();
    } else {
      setShowResetConfirmation(true);
    }
  };

  // Results view
  if (showResult) {
    return (
      <QuizResults
        score={score}
        totalQuestions={quizData.length}
        leaderboard={leaderboard}
        onReset={handleReset}
      />
    );
  }

  // Main quiz view
  return (
    <div className="container">
      <QuizHeader onReset={handleResetClick} />
      <hr />
      
      <QuestionDisplay
        question={currentQuestion}
        questionNumber={index + 1}
        selectedAnswer={selectedAnswer}
        showAnswer={showAnswer}
        onAnswerClick={handleAnswerClick}
      />

      {showAnswer && (
        <FeedbackSection
          concept={currentQuestion.concept}
          explanation={currentQuestion.explanation}
        />
      )}

      <QuizControls
        onNext={handleNext}
        showAnswer={showAnswer}
        isLastQuestion={isLastQuestion}
        currentQuestion={index + 1}
        totalQuestions={quizData.length}
      />

      {showResetConfirmation && (
        <ResetConfirmationDialog
          onConfirm={handleReset}
          onCancel={() => setShowResetConfirmation(false)}
        />
      )}
    </div>
  );
};

export default Quiz;