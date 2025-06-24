import { useState } from "react";
import { sendContactForm } from "../services/api";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    Nombre_Completo: "",
    Correo_Electronico: "",
    Telefono: "",
    Mensaje: "",
    aceptado: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica que quieras para enviar el formulario
    await sendContactForm(form);
    // Reiniciar formulario si quieres
    setForm({
      Nombre_Completo: "",
      Correo_Electronico: "",
      Telefono: "",
      Mensaje: "",
      aceptado: false,
    });
  };

  return (
    <section id="contact-section" className="contact-form-section">
      <h2>Contáctanos</h2>
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

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="aceptado"
            checked={form.aceptado}
            onChange={handleChange}
            required
          />
          <span style={{ color: "black" }}>He leído y acepto el </span>
          <a href="Aviso" target="_blank" rel="noopener noreferrer">
            Aviso de Privacidad
          </a>
          .
        </label>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
