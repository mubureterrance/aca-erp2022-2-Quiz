import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

interface User {
  uid: string;
}

/**
 * Custom hook to manage quiz progress per user using localStorage.
 *
 * @param user              current authenticated user (with uid)
 * @param index             current question index
 * @param score             current score
 * @param selectedAnswer    current selected answer
 * @param showAnswer        whether the answer is currently shown
 * @param setIndex          setter for question index
 * @param setScore          setter for score
 * @param setSelectedAnswer setter for selected answer
 * @param setShowAnswer     setter for answer display state
 */
export const useQuizProgress = (
  user: User | null,
  index: number,
  score: number,
  selectedAnswer: number | null,
  showAnswer: boolean,
  setIndex: (i: number) => void,
  setScore: (s: number) => void,
  setSelectedAnswer: (a: number | null) => void,
  setShowAnswer: (v: boolean) => void
) => {
  const { isAvailable, safelyGet, safelySet } = useLocalStorage();

  const storageKey = user ? `quizProgress_${user.uid}` : null;

  // Load saved quiz progress on mount
  useEffect(() => {
    if (!isAvailable() || !storageKey) return;

    const saved = safelyGet(storageKey, null);
    if (saved) {
      setIndex(saved.index);
      setScore(saved.score);
      setSelectedAnswer(saved.selectedAnswer);
      setShowAnswer(saved.showAnswer);
    }
  }, [storageKey]);

  // Save progress when quiz state changes
  useEffect(() => {
    if (!isAvailable() || !storageKey) return;

    safelySet(storageKey, {
      index,
      score,
      selectedAnswer,
      showAnswer,
      timestamp: Date.now(),
    });
  }, [index, score, selectedAnswer, showAnswer, storageKey]);
};
