import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from "./Components/Auth/hooks/AuthProvider";
import Quiz from "./Components/Quiz/Quiz";
import WelcomePage from "./Components/Welcome/WelcomePage";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";


function App() {
  return (
    
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<WelcomePage />} />
          <Route 
              path="/login" 
              element={
                <ProtectedRoute>
                  <Login />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/register" 
              element={
                <ProtectedRoute>
                  <Register />
                </ProtectedRoute>
              } 
            />
          
        {/* Protected routes that require authentication */}
          <Route path="/" element={
            <ProtectedRoute>
              <WelcomePage />
            </ProtectedRoute>
            }/>
          <Route path="/quiz" element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
              
            } />
        </Routes>
      </Router>
    
  );
}

export default App;
