import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
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
      setError(err.message); // Устанавливаем сообщение об ошибке
      console.error('Login failed:', err);
    }
  };

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <Modal.Dialog className="login-dialog">
        <Modal.Header>
          <Modal.Title className="login-title">Вхід в систему</Modal.Title>
          <CloseButton onClick={handleExit} className="close-button" />
        </Modal.Header>

        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введіть email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login-input"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введіть пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="login-button w-100 mt-3">
              Увійти
            </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}
