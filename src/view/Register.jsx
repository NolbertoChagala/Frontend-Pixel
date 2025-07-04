import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { register } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await register({ email, password });
      const data = response.data;

      // Si prefieres no guardar token al registrarse, comenta esta línea:
      localStorage.setItem("token", data.token);

      navigate("/login");
    } catch (err) {
      const apiError = err.response?.data?.error;
      setError(apiError || "Error al registrar.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit} className="login-form" noValidate>
          {error && (
            <div className="error" role="alert">
              {error}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              disabled={isLoading}
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Cargando..." : "Registrar"}
          </button>
          <div className="forgot-password">
            <a href="/login">¿Ya tienes cuenta? Iniciar sesión</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
