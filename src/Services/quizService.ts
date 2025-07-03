import { db } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";
import { ScoreEntry } from "../Components/Quiz/Types/quiz";

export const saveScoreToFirestore = async (scoreEntry: ScoreEntry): Promise<void> => {
  try {
    await addDoc(collection(db, "scores"), scoreEntry);
    console.log("📤 Score saved to Firestore leaderboard");
  } catch (err) {
    console.error("❌ Failed to save score to Firestore:", err);
    throw err;
  }
};

export const fetchLeaderboardFromFirestore = async (): Promise<ScoreEntry[]> => {
  try {
    const q = query(
      collection(db, "scores"),
      orderBy("percentage", "desc"),
      limit(10)
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as ScoreEntry);
  } catch (err) {
    console.error("⚠️ Could not load leaderboard from Firestore", err);
    throw err;
  }
};