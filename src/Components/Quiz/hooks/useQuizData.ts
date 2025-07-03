import { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { QuizQuestionWithId } from "../Types/quiz";

export const useQuizData = () => {
  const [quiz, setQuiz] = useState<QuizQuestionWithId[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Starting to fetch quiz data from Firebase...");
        setLoading(true);
        setError(null);

        const querySnapshot = await getDocs(collection(db, "newQuestions"));

        if (querySnapshot.empty) {
          console.warn("⚠️ No documents found in 'quiz' collection");
          setError("No quiz questions found in database");
          setLoading(false);
          return;
        }

        const quizData: QuizQuestionWithId[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            question: data.question || "Question not available",
            option1: data.option1 || "Option 1 not available",
            option2: data.option2 || "Option 2 not available",
            option3: data.option3 || "Option 3 not available",
            option4: data.option4 || "Option 4 not available",
            ans: data.ans || 1,
            concept: data.concept || "concept not available",
            explanation: data.explanation || "explanation not available"
          };
        });

        console.log("✅ Successfully processed quiz data:", quizData);
        setQuiz(quizData);
        setLoading(false);
      } catch (err) {
        console.error("❌ Error fetching quiz data:", err);
        setError(`Failed to load quiz data: ${err instanceof Error ? err.message : String(err)}`);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { quiz, loading, error };
};