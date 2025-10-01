import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login"); // back to login page
  };

  return (
    <button onClick={handleLogout} style={{ margin: "10px", padding: "5px 12px" }}>
      Logout
    </button>
  );
}
