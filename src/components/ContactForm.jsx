import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { sendContactForm } from "../services/api";
import "../styles/ContactForm.css";

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

  const [captchaToken, setCaptchaToken] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidName(form.Nombre_Completo)) {
      alert("Nombre inválido. Solo letras y mínimo 3 caracteres.");
      return;
    }

    if (!isValidPhone(form.Telefono)) {
      alert("Teléfono inválido. Debe tener entre 10 y 15 dígitos.");
      return;
    }

    if (!isValidMessage(form.Mensaje)) {
      alert("El mensaje debe tener al menos 10 caracteres.");
      return;
    }

    if (!captchaToken) {
      alert("Por favor verifica que no eres un robot.");
      return;
    }

    try {
      await sendContactForm({ ...form, token: captchaToken });
      setSubmitted(true);
      setForm({
        Nombre_Completo: "",
        Correo_Electronico: "",
        Telefono: "",
        Mensaje: "",
      });
      setCaptchaToken(null);
      reCAPTCHA.current?.reset();
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

        {/* CAPTCHA visible */}
        <ReCAPTCHA
          sitekey="6LdcaGsrAAAAAIp9NYAqs9mMfkwRM3dYn0MaW9aR"
          onChange={handleCaptchaChange}
          ref={recaptchaRef}
        />

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
