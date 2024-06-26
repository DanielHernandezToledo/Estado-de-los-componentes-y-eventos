// Se crean 4 componentes: Registro, SocialButton, Formulario y Alert
// El componente Registro importa todos los demás componentes.

// Importando los componentes al componente Registro.jsx

import { useState } from "react";

import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";

//Importando iconos
import facebook from "/icons/facebook.png";
import github from "/icons/github.png";
import linkedin from "/icons/linkedin.png";

const Registro = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div>
        <div
          className="card"
          style={{ width: "24rem" }}
        >
          <div className="card-body">
            <h1 className="text-center">Crear una cuenta</h1>
            <div className="d-flex justify-content-center gap-3">
              <SocialButton
                facebook={facebook}
                github={github}
                linkedin={linkedin}
              />
            </div>
            <br />
            <h6 className="text-center">O usa tu email para registrarte</h6>
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
      </div>
    </div>
  );
};
export default Registro;
