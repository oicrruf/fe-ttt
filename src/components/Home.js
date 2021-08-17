import { TicTacToeBtns } from "./TicTacToeBtns";
import React from "react";
import Swal from 'sweetalert2'


const Home = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Tic Tac Toe Game</span>
            <span className="block text-indigo-600">Master en Code - G4</span>
          </h2>
        </div>
      </div>
      <TicTacToeBtns />
    </>
  );
};



const saveLocalStorage = () =>{
  
  let nickname  = Swal.fire( 
    
    {
      
      input: 'textarea',
      inputLabel: 'Ingresa nickname si no estas registrado',
      inputPlaceholder: 'Escribe aqui',
      inputAttributes: {
        'aria-label': 'Escribe aqui'
      },
      showCancelButton: true,
      //timer: "4000"   //cierra automaticamente la ventana
      
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
        
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          
          .catch(error => {
            Swal.resetValidationMessage(
              `Request failed: ${error}`
            )
          })
          
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
    .then((resultado) => {
      if (resultado.value) {
          let nickname = resultado.value;
          localStorage.setItem("nickname", JSON.stringify(nickname))
          Swal.fire({
            title: `${resultado.value.login}'s avatar`,
            imageUrl: resultado.value.avatar_url
          })
    }
  })
    }
  
  

  //console.log(nickname)

  


saveLocalStorage()

export { Home };
