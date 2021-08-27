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
  Swal.fire({
    input: "text",
    inputLabel: "Ingresa nickname si no estas registrado",
    inputPlaceholder: "Ingresa tu nickname de GitHub",
    inputAttributes: {
      "aria-label": "Ingresa tu nickname de GitHub",
    },
    showCancelButton: true,
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
      localStorage.setItem(
        "@ttt_nickname",
        JSON.stringify(resultado.value.avatar_url).replaceAll('"', "")
      );
      Swal.fire({
        title: `${resultado.value.login}'s avatar`,
        imageUrl: resultado.value.avatar_url,
      });
    }
  });
};
if (!localStorage.getItem("@ttt_nickname")) {
  saveLocalStorage();
}

export { Home };
