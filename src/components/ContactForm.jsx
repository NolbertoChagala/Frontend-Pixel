import { useState, useRef } from "react";
import { sendContactForm } from "../services/api";
import "../styles/ContactForm.css";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    Nombre_Completo: "",
    Correo_Electronico: "",
    Telefono: "",
    Mensaje: "",
    aceptado: false,
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);
  const MySwal = withReactContent(Swal);

  const isValidName = (name) => /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]{3,}$/.test(name);
  const isValidPhone = (phone) => /^\d{10,15}$/.test(phone);
  const isValidMessage = (msg) => msg.trim().length >= 10;

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const sanitizeInput = (str) => str.trim().replace(/\s+/g, " ");

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const showError = (msg) =>
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: msg,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidName(form.Nombre_Completo))
      return showError("Nombre inválido. Solo letras y mínimo 3 caracteres.");
    if (!isValidPhone(form.Telefono))
      return showError("Teléfono inválido. Debe tener entre 10 y 15 dígitos.");
    if (!isValidMessage(form.Mensaje))
      return showError("El mensaje debe tener al menos 10 caracteres.");
    if (!captchaToken)
      return showError("Por favor verifica que no eres un robot.");
    if (!form.aceptado)
      return showError("Debes aceptar el aviso de privacidad.");

    try {
      // GUARDAR EN LA BASE DE DATOS
      await sendContactForm({
        Nombre_Completo: sanitizeInput(form.Nombre_Completo),
        Correo_Electronico: form.Correo_Electronico.trim(),
        Telefono: form.Telefono.replace(/[^\d]/g, ""),
        Mensaje: sanitizeInput(form.Mensaje),
        token: captchaToken,
      });

      // ENVIAR CORREO CON EMAILJS
      await emailjs.send(
        "service_5aofyoc",
        "template_18ltk6b",
        {
          Nombre_Completo: sanitizeInput(form.Nombre_Completo),
          Correo_Electronico: form.Correo_Electronico.trim(),
          Telefono: form.Telefono.replace(/[^\d]/g, ""),
          Mensaje: sanitizeInput(form.Mensaje),
        },
        "jXLYhFbE3VyWpKrFs"
      );

      console.log({
        Nombre_Completo: sanitizeInput(form.Nombre_Completo),
        Correo_Electronico: form.Correo_Electronico.trim(),
        Telefono: form.Telefono.replace(/[^\d]/g, ""),
        Mensaje: sanitizeInput(form.Mensaje),
      });

      // ÉXITO AL ENVIAR EL FORMULARIO
      await MySwal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarnos. Te responderemos pronto.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
      });

      // REINICIO DEL FORMULARIO
      setForm({
        Nombre_Completo: "",
        Correo_Electronico: "",
        Telefono: "",
        Mensaje: "",
        aceptado: false,
      });
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Error al enviar el formulario", error);
      showError("Hubo un problema al enviar el mensaje. Intenta más tarde.");
    }
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

        <ReCAPTCHA
          sitekey="6LdcaGsrAAAAAIp9NYAqs9mMfkwRM3dYn0MaW9aR"
          onChange={handleCaptchaChange}
          ref={recaptchaRef}
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="aceptado"
            checked={form.aceptado}
            onChange={handleChange}
            required
          />

          <span className="checkbox-text">
            He leído y acepto el{" "}
            <a
              href="Aviso"
              target="_blank"
              rel="noopener noreferrer"
              className="aviso-link"
            >
              Aviso de Privacidad
            </a>
          </span>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
