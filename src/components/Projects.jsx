import '../styles/Projects.css';
import Ropa from '../img/Projects/Ropa.jpg';
import Tecnologia from '../img/Projects/Identidad.png';
import Artesanal from '../img/Projects/Artesanal.jpg';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={Ropa} alt="Proyecto 1" />
          <p>Diseño web para marca de ropa urbana</p>
        </div>
        <div className="project-card">
          <img src={Tecnologia} alt="Proyecto 2" />
          <p>Identidad visual para startup de tecnología</p>
        </div>
        <div className="project-card">
          <img src={Artesanal} alt="Proyecto 3" />
          <p>Campaña digital para tienda artesanal</p>
        </div>
      </div>
    </section>
  );
}
