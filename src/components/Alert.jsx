import { Alert as BootstrapAlert } from "react-bootstrap";

// Componente de alerta
const Alert = ({ message, variant }) => {
  if (!message) return null;

  return (
    <BootstrapAlert variant={`${variant} mx-4 text-center`}>
      {message}
    </BootstrapAlert>
  );
};

export default Alert;
