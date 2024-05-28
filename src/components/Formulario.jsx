import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = ({ setAlertMessage, setAlertVariant }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que los campos no estén vacíos
    if (!nombre || !email || !password || !confirmPassword) {
      setAlertMessage("Todos los campos son obligatorios.");
      setAlertVariant("danger");
      return;
    }

    // Validar formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setAlertMessage("El formato del email es incorrecto.");
      setAlertVariant("danger");
      return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setAlertMessage("Las contraseñas no coinciden.");
      setAlertVariant("danger");
      return;
    }

    // Validar la seguridad de la contraseña
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setAlertMessage(
        "La contraseña debe tener al menos 8 caracteres, incluir números, letras mayúsculas y minúsculas, y símbolos."
      );
      setAlertVariant("danger");
      return;
    }

    // Si todas las validaciones pasan
    setAlertMessage("Registro exitoso.");
    setAlertVariant("success");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirme su contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
      >
        Registrarse
      </Button>
    </Form>
  );
};

export default Formulario;
