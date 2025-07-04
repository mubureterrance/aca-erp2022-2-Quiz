import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom"; // Import the hook
import React from "react";

function SignOutButton() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      navigate("/login"); // Redirect to login screen
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <button onClick={handleSignOut} className="button-Signout">
      Sign Out
    </button>
  );
}

export default SignOutButton;
