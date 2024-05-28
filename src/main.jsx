import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./components/Registro";
import Formulario from "./components/Formulario";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Registro />
    <Formulario />
  </React.StrictMode>
);
