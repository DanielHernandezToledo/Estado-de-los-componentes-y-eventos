// Importando los componentes al componente Registro.jsx

import React, { useState } from "react";

import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from './Alert';

const Registro = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");

  return (
    <div
      className="card"
      style={{ width: "24rem" }}
    >
      <h1 className="text-primary text-center">Crear una cuenta</h1>
      <div className="d-flex justify-content-evenly gap-2">
        <SocialButton />
        <Formulario
          setAlertMessage={setAlertMessage}
          setAlertVariant={setAlertVariant}
        />
        {alertMessage && (
          <Alert
            message={alertMessage}
            variant={alertVariant}
          />
        )}
      </div>
    </div>
  );
};
export default Registro;
