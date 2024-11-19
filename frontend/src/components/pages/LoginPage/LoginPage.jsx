import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { loginUser } from "../../../services/AuthService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const credentials = { email, password };
    try {
      await loginUser(credentials);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form-wrapper">
        <h2 className="login-title">Вхід</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email адреса</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ваш пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Увійти
          </Button>
        </Form>
      </div>
    </div>
  );
}
