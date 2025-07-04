import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./Components/Auth/hooks/AuthProvider";
import Quiz from "./Components/Quiz/Quiz";
import WelcomePage from "./Components/Welcome/WelcomePage";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import { signOut } from "firebase/auth";
import { auth } from "./firebase"

function App() {
  useEffect(() => {
    // Sign out user when app starts
    signOut(auth);
    
  }, []);
  
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
