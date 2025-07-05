import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Diseño from "../img/Login/Diseño.jpg";
import { login } from "../services/authService";
import Navbar from "../components/Navbar";

const Login = () => {
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
      const response = await login({ email, password });
      const data = response.data;

      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      const apiError = err.response?.data?.error;
      setError(apiError || "Error al iniciar sesión.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-page">
        <div className="login-image">
          <img src={Diseño} alt="Espacio de trabajo moderno" loading="lazy" />
        </div>
        <div className="login-container">
          <h2>Iniciar Sesión</h2>
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
              {isLoading ? "Cargando..." : "Entrar"}
            </button>

            <div className="forgot-password">
              <a href="/register">Regístrate</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;