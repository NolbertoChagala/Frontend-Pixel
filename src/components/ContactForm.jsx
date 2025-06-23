import { useState } from 'react';
import { sendContactForm } from '../services/api';
import '../styles/ContactForm.css';

export default function ContactForm() {
  const [form, setForm] = useState({
    Nombre_Completo: '',
    Correo_Electronico: '',
    Telefono: '',
    Mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactForm(form);
      setSubmitted(true);
      setForm({ Nombre_Completo: '', Correo_Electronico: '', Telefono: '', Mensaje: '' });

      // 🕒 Ocultar el mensaje después de 4 segundos
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };

  return (
    <section id='contact-section' className="contact-form-section">
      <h2>Contáctanos</h2>
      {submitted && <p className="success">Mensaje enviado correctamente</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Nombre_Completo"
          placeholder="Nombre completo"
          value={form.Nombre_Completo}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="Correo_Electronico"
          placeholder="Correo"
          value={form.Correo_Electronico}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="Telefono"
          placeholder="Teléfono"
          value={form.Telefono}
          onChange={handleChange}
          required
        />
        <textarea
          name="Mensaje"
          placeholder="Mensaje"
          rows="5"
          value={form.Mensaje}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
