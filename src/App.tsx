import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./Components/Quiz/Quiz";
import WelcomePage from "./Components/Welcome/WelcomePage";

import { collection, addDoc } from "firebase/firestore";
import { data } from "./Data"; // adjust path if needed
import db from "./firebase"; // your Firestore config


const uploadQuestions = async () => {
  try {
    const batchUpload = data.map(async (item) => {
      await addDoc(collection(db, "questions"), item);
    });

    await Promise.all(batchUpload);
    console.log("✅ All questions uploaded to Firestore!");
  } catch (err) {
    console.error("❌ Failed to upload questions:", err);
  }
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
