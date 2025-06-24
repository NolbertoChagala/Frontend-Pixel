import '../styles/Aviso.css';

export default function Aviso() {
  return (
    <section className="aviso-container">
      <h2 className="aviso-title">Aviso de Privacidad</h2>

      <p>
        En <strong>Pixel Studio</strong>, respetamos tu privacidad y estamos
        comprometidos con la protección de tus datos personales. Este aviso
        explica cómo recopilamos, usamos y protegemos tu información.
      </p>

      <h3 className="aviso-subtitle">1. Información que recopilamos</h3>
      <ul className="aviso-list">
        <li>Nombre completo</li>
        <li>Correo electrónico</li>
        <li>Teléfono</li>
        <li>Mensaje proporcionado</li>
      </ul>

      <h3 className="aviso-subtitle">2. Uso de la información</h3>
      <p>Usamos tu información para:</p>
      <ul className="aviso-list">
        <li>Responder a tus solicitudes o mensajes</li>
        <li>Mejorar nuestros servicios</li>
        <li>Ofrecer atención personalizada</li>
      </ul>

      <h3 className="aviso-subtitle">3. Protección de datos</h3>
      <p>
        Tus datos personales se almacenan de forma segura y no se comparten con terceros,
        salvo obligación legal.
      </p>

      <h3 className="aviso-subtitle">4. Derechos del usuario</h3>
      <p>
        Puedes acceder, rectificar o eliminar tus datos personales en cualquier momento
        escribiéndonos a través del formulario o directamente por correo.
      </p>

      <h3 className="aviso-subtitle">5. Cambios al aviso</h3>
      <p>
        Nos reservamos el derecho de modificar este aviso. Cualquier cambio será publicado
        en esta misma página.
      </p>

      <p className="aviso-footer">
        Última actualización: 23 de junio de 2025
      </p>
    </section>
  );
}
