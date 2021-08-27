import { Formik } from "formik";
import React from "react";
import { Button, Input } from "semantic-ui-react";
import { Label } from "../../atoms";
import "semantic-ui-css/semantic.min.css";

const Login = () => {
  return (
    <div className="m-formContainer">
      <Formik
        initialValues={{
          nombre: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }
          if (!valores.password) {
            errores.password = "Por favor ingrese su password";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
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
          <form
            className="shadow-lg w-80 p-4 flex flex-col bg-primary rounded-lg"
            onSubmit={handleSubmit}
          >
            {console.log(errors)}
            <Label>Usuario</Label>
            <Input
              icon="user"
              id="nombre"
              className="pb-4"
              type="text"
              placeholder="Ingresa tu usuario"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.nombre && errors.nombre && (
              <div className="error pb-4 text-red-600">{errors.nombre}</div>
            )}

            <Label>Password</Label>
            <Input
              icon="lock"
              id="password"
              className="pb-4"
              type="password"
              placeholder="Capture la contraseña"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {touched.password && errors.password && (
              <div className="error pb-4 text-red-600">{errors.password}</div>
            )}

            <Button primary>Login</Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
