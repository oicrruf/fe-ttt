import React, { useState, useEffect } from "react";
import { Formik, prepareDataForValidation } from "formik";
import { Button } from "./Formulario/Button.js";
import { RegistroInput } from "./Formulario/RegistroInput.js";
import "./Formulario/FormReg.css";

function Register() {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  //const [botonHabilitado, cambiarBotonHabilitado] = useState(true);
  return (   
    <Formik
      initialValues={{
        user: "",
        name: "",
        password: "",
        repeat_pass: "",
        email: "",
        terminos: false
      }}
      validate={(valores) => {
        let errores = {};

        if (!valores.user) {
          errores.user = "Por favor capture un nombre de usuario";
          // console.log('user');
        } else if (!/^[a-zA-Z0-9]{4,16}$/.test(valores.user)) {
          errores.user = "El usuario solo puede contener, letras y numeros";
        }

        if (!valores.name) {
          errores.name = "Por favor capture su Nombre";
          // console.log('name');
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
          errores.name = "El nombre solo puede contener, letras y espacios";
        }

        if (!valores.password) {
          errores.password = "Por favor capture su contraseña";
          // console.log('password');
        } else if (!/^.{4,12}$/.test(valores.password)) {
          errores.password =
            "La contraseña puede contener de 4 a 12 caracteres";
        }

        if (!valores.repeat_pass) {
          errores.repeat_pass =
            "Por favor capture la confirmacion de la contraseña";
          // console.log('password');
        }
        if (valores.repeat_pass !== valores.password) {
          errores.repeat_pass =
            "La contraseña y la confirmacion no son iguales";
        }

        if (!valores.email) {
          errores.email = "Por favor ingrese su correo";
          // console.log('email');
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.email
          )
        ) {
          errores.email =
            "El correo solo puede contener, letras, numeros, puntos, guiones y guion bajo";
        }

        if (valores.terminos == false) {
          errores.check = "Debes aceptar los términos y condiciones";
          console.log(valores.check);
        }

        return errores;

       // if (valores.namevalores.password && valores.repeat_pass && )

      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        console.log("Formulario enviado");
        setTimeout(() => cambiarFormularioEnviado(false), 4000);

        const formularioRegistro = {
          user: valores.user,
          name: valores.name,
          password: valores.password,
          email: valores.name
        }

        const formularioString = JSON.stringify(formularioRegistro);

        localStorage.setItem("Formulario", formularioString)

      }}
    >
      {({
        errors,
        touched,
        values,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <form className="formReg" onSubmit={handleSubmit}>
          <label>User</label>
          <input
            id="user"
            className="registroInput"
            type="text"
            placeholder="Capture un usuario"
            value={values.user}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.user && errors.user && (
            <div className="error">{errors.user}</div>
          )}

          <label>Name</label>
          <input
            id="name"
            className="registroInput"
            type="text"
            placeholder="Ingrese su nombre"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && (
            <div className="error">{errors.name}</div>
          )}

          <label>Password</label>
          <input
            id="password"
            className="registroInput"
            type="password"
            placeholder="Capture la contraseña"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && (
            <div className="error">{errors.password}</div>
          )}

          <label>Repeat password</label>
          <input
            id="repeat_pass"
            className="registroInput"
            type="password"
            placeholder="Confirme su contraseña"
            value={values.repeat_pass}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.repeat_pass && errors.repeat_pass && (
            <div className="error">{errors.repeat_pass}</div>
          )}

          <label>E-mail</label>
          <input
            id="email"
            className="registroInput"
            type="texto"
            placeholder="Capture su correo"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <div className="error">{errors.email}</div>
          )}

          <br />
          <label>
            <input
              id="terminos"
              type="checkbox" 
              value={values.check}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            Acepto los terminos y condiciones
            {errors.check && (
              <div className="error">{errors.check}</div>
            )}
          </label>

          <button className="btnRegistro">Enviar</button>
          <br />
          {formularioEnviado && (
            <p className="exito">Formulario enviado con exito!</p>
          )}
        </form>
      )}
    </Formik>
  );
}

export { Register };
