import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DashboardNavbar.css";

const DashboardNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar__logo">
        🧩 CRM Dashboard
      </div>
      <button className="dashboard-navbar__logout" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </nav>
  );
};

export default DashboardNavbar;
