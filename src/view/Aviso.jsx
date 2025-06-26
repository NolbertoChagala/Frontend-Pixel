import "../styles/Aviso.css";
import Navbar from "../components/Navbar";

export default function Aviso() {
  return (
    <div>
      <Navbar />
      <section className="aviso-container">
        <header className="aviso-header">
          <h1 className="aviso-title">Aviso de privacidad</h1>
          <p className="aviso-intro">
            En <strong>Pixel Studio</strong>, respetamos tu privacidad y estamos
            comprometidos con la protección de tus datos personales. Este aviso
            explica cómo recopilamos, usamos y protegemos tu información.
          </p>
        </header>

        <article className="aviso-content">
          <h2 className="aviso-subtitle">1. Información que recopilamos</h2>
          <ul className="aviso-list">
            <li>Nombre completo</li>
            <li>Correo electrónico</li>
            <li>Teléfono</li>
            <li>Mensaje proporcionado</li>
          </ul>

          <h2 className="aviso-subtitle">2. Uso de la información</h2>
          <p>Usamos tu información para:</p>
          <ul className="aviso-list">
            <li>Responder a tus solicitudes o mensajes</li>
            <li>Mejorar nuestros servicios</li>
            <li>Ofrecer atención personalizada</li>
          </ul>

          <h2 className="aviso-subtitle">3. Protección de datos</h2>
          <p>
            Tus datos personales se almacenan de forma segura y no se comparten
            con terceros, salvo obligación legal.
          </p>

          <h2 className="aviso-subtitle">4. Derechos del usuario</h2>
          <p>
            Puedes acceder, rectificar o eliminar tus datos personales en
            cualquier momento escribiéndonos a través del formulario o
            directamente por correo.
          </p>

          <h2 className="aviso-subtitle">5. Cambios al aviso</h2>
          <p>
            Nos reservamos el derecho de modificar este aviso. Cualquier cambio
            será publicado en esta misma página.
          </p>
        </article>

        <footer className="aviso-footer">
          Última actualización:{" "}
          <time dateTime="2025-06-23">23 de junio de 2025</time>
        </footer>
      </section>
    </div>
  );
}
