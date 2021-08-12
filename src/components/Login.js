import React, { useState, useEffect } from "react";
//import { Button } from "./Formulario/Button.js";
//import { RegistroInput } from "./Formulario/RegistroInput.js";
import "./Formulario/FormReg.css";

function Login() {

  return (
    <>
      <form className="formReg">
        <input
          id="user"
          className="registroInput"
          type="text"
          placeholder="Ingresa tu usuario"
        
        />
       
        <button className="btnRegistro" >Login</button>
             {/*  <Button onClick={submit} /> */}
         
      </form>
    </>
  );
}

export { Login };