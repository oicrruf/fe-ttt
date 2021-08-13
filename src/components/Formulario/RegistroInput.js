import React from "react";
import "./RegistroInput.css";

function RegistroInput(props) {
  return (
    <div>
      <input
        id="user"
        className="registroInput"
        type="text"
        placeholder="Ingresa tu usuario"
      />
      <input
        id="password"
        className="registroInput"
        type="text"
        placeholder="Ingresa tu contraseña"
      />
    </div>
  );
}

export { RegistroInput };
