import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Pixel Studio</h3>
          <p>Diseñamos experiencias digitales que inspiran.</p>
        </div>

        <div className="footer-column">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#header">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact-section">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contacto</h4>
          <p>Email: hola@pixelstudio.com</p>
          <p>Tel: +52 55 1234 5678</p>
          <p>CDMX, México</p>
        </div>

        <div className="footer-column social">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Pixel Studio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
