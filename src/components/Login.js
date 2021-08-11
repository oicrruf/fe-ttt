import React, { useState, useEffect } from "react";
//import { Button } from "./Formulario/Button.js";
//import { RegistroInput } from "./Formulario/RegistroInput.js";
import "./Formulario/FormReg.css";

function Login() {
  const [userValue, setUserValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const submit = () => {
    if (userValue === "" || passwordValue === "") {
      alert("No data");
    } else {
      alert(`Los datos se enviaron ${userValue} y ${passwordValue}`);
    }
  };

  const onInputChange = (e) => {
    if (e.target.id === "user") {
      setUserValue(e.target.value);
      console.log(userValue);
    } else if (e.target.id === "password") {
      setPasswordValue(e.target.value);
      console.log(passwordValue);
    }
  };
  return (
    <>
      <form className="formReg">
        <input
          id="user"
          className="registroInput"
          type="text"
          placeholder="Ingresa tu usuario"
          onChange={onInputChange}
        />
        <input
          id="password"
          className="registroInput"
          type="text"
          placeholder="Ingresa tu contraseña"
          onChange={onInputChange}
        />
        <button className="btnRegistro" onClick={submit}>Login</button>
             {/*  <Button onClick={submit} /> */}
         
      </form>
    </>
  );
}

export { Login };