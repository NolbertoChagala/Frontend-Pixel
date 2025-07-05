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
      <a href="/" className="dashboard-navbar__logo" aria-label="Ir al inicio">
        🧩 CRM Dashboard
      </a>
      <a href="/" className="dashboard-navbar__logo" aria-label="Ir al inicio">
        PixelStudio
      </a>
      <button
        className="dashboard-navbar__logout"
        onClick={handleLogout}
        title="Cerrar sesión"
      >
        Cerrar sesión
      </button>
    </nav>
  );
};

export default DashboardNavbar;
