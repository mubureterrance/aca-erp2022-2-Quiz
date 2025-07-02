import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

/**
 * This custom hook handles:
 *  - loading quiz progress from localStorage on mount
 *  - saving quiz progress whenever the user progresses
 *
 * It guarantees a consistent quiz experience even across page refreshes.
 *
 * @param index            current question index
 * @param score            current score
 * @param selectedAnswer   current selected answer
 * @param showAnswer       whether answer is currently shown
 * @param setIndex         setter to update question index
 * @param setScore         setter to update score
 * @param setSelectedAnswer setter to update selected answer
 * @param setShowAnswer    setter to update answer display state
 */
export const useQuizProgress = (
  index: number,
  score: number,
  selectedAnswer: number | null,
  showAnswer: boolean,
  setIndex: (i: number) => void,
  setScore: (s: number) => void,
  setSelectedAnswer: (a: number | null) => void,
  setShowAnswer: (v: boolean) => void
) => {
  // load localStorage utilities
  const { isAvailable, safelyGet, safelySet } = useLocalStorage();

  // Load saved quiz progress on mount
  useEffect(() => {
    if (!isAvailable()) return;  // localStorage not working? skip.
    const saved = safelyGet("quizProgress", null);
    if (saved) {
      // apply saved values
      setIndex(saved.index);
      setScore(saved.score);
      setSelectedAnswer(saved.selectedAnswer);
      setShowAnswer(saved.showAnswer);
    }
  }, []);

  // Whenever any quiz state changes, persist progress
  useEffect(() => {
    if (!isAvailable()) return;
    safelySet("quizProgress", {
      index,
      score,
      selectedAnswer,
      showAnswer,
      timestamp: Date.now()
    });
  }, [index, score, selectedAnswer, showAnswer]);
};
