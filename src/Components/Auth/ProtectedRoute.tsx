import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth/hooks/AuthProvider";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
