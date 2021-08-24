import React from "react";
import Swal from "sweetalert2";
import { Hash } from "./Hash";
import { TicTacToeBtns } from "./TicTacToeBtns";

const Home = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight  sm:text-4xl">
            <span className="block text-primary">Tic Tac Toe Game</span>
            <span className="block text-accent">Master en Code - G4</span>
          </h2>
        </div>
      </div>
      <TicTacToeBtns />
      <div id="container-hash">
        <Hash />
      </div>
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

//console.log(nickname)

saveLocalStorage();

export { Home };
