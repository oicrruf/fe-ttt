import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Button } from "./Formulario/Button.js";
import { RegistroInput } from "./Formulario/RegistroInput.js";
import "./Formulario/FormReg.css";

function Register() {
  return(
    <Formik
    initialValues={{
      User:'',
      Name:'',
      Password:'',
      Repeat_password:'',
      Email:''
    }}
    validate={(valores)=>{
      let errores={};
      if(!valores.user){
        errores.user='Capture un nombre de usuario'
        console.log('user');
      }else if(!/^[a-zA-Z0-9\_\-]{4,16}$/.test(valores.user)){errores.user='Este campos puede contener, letras, numeros, guion y guions bajo'}
      return errores;
    }}
    onSubmit={(valores,{resetForm})=>{
      resetForm();
      console.log('Formularios enviado');
      console.log(valores.user);
    }}
    >
      {({errors, touched, values, handleSubmit,
      handleChange, handleBlur})=>(
        <form className='formReg' onSubmit={handleSubmit}>
        {console.log(errors)}
        <input
          id='user'
          className='registroInput'
          type='text'
          placeholder='Capture un usuario'
          value={values.user}
          onChange ={handleChange}
          onBlur={handleBlur}
        />
        <input
        id='nombre'
        className='registroInput'
        type='text'
        placeholder='Ingrese su nombre'
        value={values.nombre}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        <input 
          id='pass'
          className='registroInput'
          type='texto'
          placeholder='Capture la contraseña'
          value={values.pass}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input
          id='confirmation'
          className='registroInput'
          type='texto'
          placeholder='Confirme su contraseña'
          value={values.confirmation}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <input 
          id='email'
          className='registroInput'
          type='texto'
          placeholder='Capture su correo'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}

        <button className='btnRegistro'>Enviar</button>
        </form>
      )}
    </Formik>)
}

export { Register };


