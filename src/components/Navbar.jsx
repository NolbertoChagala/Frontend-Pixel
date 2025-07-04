import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar para redirigir
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#header" className="logo">
          Pixel Studio
        </a>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="/#header" onClick={() => setIsOpen(false)}>
              Inicio
            </a>
          </li>
          <li>
            <a href="/#services" onClick={() => setIsOpen(false)}>
              Servicios
            </a>
          </li>
          <li>
            <a href="/#about" onClick={() => setIsOpen(false)}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={() => setIsOpen(false)}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="/#testimonials" onClick={() => setIsOpen(false)}>
              Testimonios
            </a>
          </li>
          <li>
            <a href="/#contact-section" onClick={() => setIsOpen(false)}>
              Contacto
            </a>
          </li>
          <li>
            <button className="logout-link" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
