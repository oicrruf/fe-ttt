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
      validate={(valores)=>{
        let errores={};
        if(!valores.nombre){
          errores.nombre='Por favor ingresa un nombre'
          console.log('nombre?');
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
          errores.nombre='El nombre solo puede contener letras y espacios';
        }
        return errores;
      }}
      
      onSubmit={(valores,{resetForm})=>{
        resetForm();
        console.log('Formulario enviado');
        console.log(valores.nombre);
      }}
      >
        
        {({errors, touched, values, handleSubmit, handleChange, handleBlur}) => (
          <form className="formReg" onSubmit={handleSubmit}>
            {console.log(errors)}
            <input
              id="nombre"
              className="registroInput"
              type="text"
              placeholder="Ingresa tu usuario"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
           {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}

            <button className="btnRegistro">Login</button>
            {/*  <Button onClick={submit} /> */}

          </form>
        )}
      </Formik>
    </>
  );
}

export { Login };
