import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import "./Formulario/FormReg.css";

function Login() {
  return (
    <>
      <Formik
      initialValues={{
        nombre:'',
        email:''
      }}
      
      onSubmit={(valores)=>{
        console.log('Formulario enviado');
        console.log(valores.nombre);
      }}
      >
        
        {({values, handleSubmit, handleChange, handleBlur}) => (
          <form className="formReg" onSubmit={handleSubmit}>
            <input
              id="nombre"
              className="registroInput"
              type="text"
              placeholder="Ingresa tu usuario"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
           

            <button className="btnRegistro">Login</button>
            {/*  <Button onClick={submit} /> */}
          </form>
        )}
      </Formik>
    </>
  );
}

export { Login };
