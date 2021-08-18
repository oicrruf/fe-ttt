import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import "./Formulario/FormReg.css";

function Login() {
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
            console.log("nombre?");
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }
          if (!valores.password) {
            errores.password = "Por favor ingrese su password";
            console.log("password?");
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");

          const user = {
            nombre: valores.nombre,
            password: valores.password,
          };

          const userString = JSON.stringify(user);

          localStorage.setItem("Usuario", userString);
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
            {console.log(errors)}
            <label>Usuario</label>
            <input
              id="nombre"
              className="registroInput"
              type="text"
              placeholder="Ingresa tu usuario"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.nombre && errors.nombre && (
              <div className="error">{errors.nombre}</div>
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

            <button className="btnRegistro">Login</button>
            {/*  <Button onClick={submit} /> */}
          </form>
        )}
      </Formik>
    </>
  );
}

export { Login };
