import '../styles/Testimonials.css';
import Ana from '../img/People/Ana.jpg';
import Luis from '../img/People/Luis.jpg';

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Testimonios</h2>
      <div className="testimonial">
        <img
          src={Ana}
          alt="Ana R."
          className="testimonial-avatar"
        />
        <p>"Pixel Studio transformó por completo nuestra marca. ¡Excelente trabajo!"</p>
        <span>- Ana R., CEO de EcoLife</span>
      </div>
      <div className="testimonial">
        <img
          src={Luis}
          alt="Luis G."
          className="testimonial-avatar"
        />
        <p>"Gracias a su equipo, nuestro sitio ahora refleja exactamente quiénes somos."</p>
        <span>- Luis G., Fundador de GreenTech</span>
      </div>
    </section>
  );
}
