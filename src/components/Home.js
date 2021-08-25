import React from "react";
import Swal from "sweetalert2";
import { TicTacToe } from "../components/organisms";

const Home = () => {
  return (
    <>
      <TicTacToe />
    </>
  );
};

const saveLocalStorage = () => {
  let nickname = Swal.fire({
    input: "text",
    inputLabel: "Ingresa nickname si no estas registrado",
    inputPlaceholder: "Escribe aqui",
    inputAttributes: {
      "aria-label": "Escribe aqui",
    },
    showCancelButton: true,
    //timer: "4000"   //cierra automaticamente la ventana

    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })

        .catch((error) => {
          Swal.resetValidationMessage(`Request failed: ${error}`);
        });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((resultado) => {
    if (resultado.value) {
      let nickname = resultado.value;
      localStorage.setItem("nickname", JSON.stringify(nickname));
      Swal.fire({
        title: `${resultado.value.login}'s avatar`,
        imageUrl: resultado.value.avatar_url,
      });
    }
  });
};

saveLocalStorage();

export { Home };
