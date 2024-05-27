// Importando los componentes al componente Registro.jsx
import SocialButton from "./SocialButton";

/* Importando Iconos */
import facebook from '../../public/icons/facebook.png'
import github from '../../public/icons/github.png'
import linkedin from '../../public/icons/linkedin.png'


export default function Registro() {
  return (
    <div
      className="card"
      style={{ width: "24rem" }}
    >
      <h1 className="text-primary text-center">Crear una cuenta</h1>
      <div className="d-flex justify-content-evenly gap-2">
        <SocialButton 
          facebook={facebook}
          github={github}
          linkedin={linkedin}
        />
      </div>
    </div>
  );
}
