import { Formik } from "formik";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Input } from "semantic-ui-react";
import { Label } from "../../atoms";
// import "./Formulario/FormReg.css";

const Register = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <Formik
      initialValues={{
        user: "",
        name: "",
        password: "",
        repeat_pass: "",
        email: "",
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
        return errores;
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        console.log("Formulario enviado");
        cambiarFormularioEnviado(true);
        setTimeout(() => cambiarFormularioEnviado(false), 4000);
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
          <Label>User</Label>
          <Input
            id="user"
            icon="user secret"
            className="registroInput pb-4"
            type="text"
            placeholder="Capture un usuario"
            value={values.user}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.user && errors.user && (
            <div className="error pb-4 text-red-600">{errors.user}</div>
          )}

          <Label>Name</Label>
          <Input
            id="name"
            icon="user"
            className="registroInput pb-4"
            type="text"
            placeholder="Ingrese su nombre"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.name && errors.name && (
            <div className="error pb-4 text-red-600">{errors.name}</div>
          )}

          <Label>Password</Label>
          <Input
            id="password"
            icon="lock"
            className="registroInput pb-4"
            type="password"
            placeholder="Capture la contraseña"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.password && errors.password && (
            <div className="error pb-4 text-red-600">{errors.password}</div>
          )}

          <Label>Repeat password</Label>
          <Input
            id="repeat_pass"
            icon="lock"
            className="registroInput pb-4"
            type="password"
            placeholder="Confirme su contraseña"
            value={values.repeat_pass}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.repeat_pass && errors.repeat_pass && (
            <div className="error pb-4 text-red-600">{errors.repeat_pass}</div>
          )}

          <Label>E-mail</Label>
          <Input
            id="email"
            icon="envelope outline"
            className="registroInput pb-4"
            type="texto"
            placeholder="Capture su correo"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.email && errors.email && (
            <div className="error pb-4 text-red-600">{errors.email}</div>
          )}
          <br />
          <Label>
            <Input id="terminos" type="checkbox" className="pb-5" />
            Acepto los terminos y condiciones
          </Label>

          <Button primary>Enviar</Button>
          <br />
          {formularioEnviado && (
            <p className="exito">Formulario enviado con exito!</p>
          )}
        </form>
      )}
    </Formik>
  );
};

export default Register;
