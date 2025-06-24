import { useState } from "react";
import { sendContactForm } from "../services/api";
import "../styles/ContactForm.css";

// Validaciones
const isValidName = (name) => /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]{3,}$/.test(name);
const isValidPhone = (phone) => /^\d{10,15}$/.test(phone);
const isValidMessage = (msg) => msg.trim().length >= 10;

export default function ContactForm() {
  const [form, setForm] = useState({
    Nombre_Completo: "",
    Correo_Electronico: "",
    Telefono: "",
    Mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidName(form.Nombre_Completo)) {
      alert("Nombre inválido. Solo letras y mínimo 3 caracteres.");
      return;
    }

    if (!isValidPhone(form.Telefono)) {
      alert("Teléfono inválido. Debe tener entre 10 y 15 dígitos numéricos.");
      return;
    }

    if (!isValidMessage(form.Mensaje)) {
      alert("El mensaje debe tener al menos 10 caracteres.");
      return;
    }

    try {
      await sendContactForm(form);
      setSubmitted(true);
      setForm({
        Nombre_Completo: "",
        Correo_Electronico: "",
        Telefono: "",
        Mensaje: "",
      });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };

  return (
    <section id="contact-section" className="contact-form-section">
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
