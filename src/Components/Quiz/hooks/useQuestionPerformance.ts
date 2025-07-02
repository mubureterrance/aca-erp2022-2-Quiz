import { useLocalStorage } from "./useLocalStorage"; 

// This custom hook tracks how many times each question
// has been answered correctly or incorrectly by the user.
// It uses localStorage to persist this data across sessions.
export const useQuestionPerformance = () => {
  // bring in our reusable localStorage wrapper
  const { isAvailable, safelyGet, safelySet } = useLocalStorage();

  /**
   * Records performance data for a question:
   *  - increments correct or incorrect counts
   *  - stores the updated counts in localStorage
   *
   * @param questionIndex  which question (by its index)
   * @param correct        whether the user's answer was correct
   */
  const trackPerformance = (questionIndex: number, correct: boolean) => {
    // if localStorage is not available, gracefully skip
    if (!isAvailable()) return;

    // get existing history or fallback to an empty object
    const history = safelyGet("questionHistory", {});

    // if the question has no record yet, initialize counts
    if (!history[questionIndex]) {
      history[questionIndex] = { correct: 0, incorrect: 0 };
    }

    // increment the appropriate counter
    if (correct) {
      history[questionIndex].correct++;
    } else {
      history[questionIndex].incorrect++;
    }

    // store the updated history back to localStorage
    safelySet("questionHistory", history);
  };

  // expose trackPerformance so the Quiz can use it
  return { trackPerformance };
};
