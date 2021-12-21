import React from "react";
import './Card.css'

const Card = ({children}) => {
    return(
        <>
            <div className="container p-4 w-full md:w-1/2 lg:w-1/3 flex h-28 justify-start bg-white justify-start space-x-6 rounded-lg shadow-md my-2 m-1 hover:scale-105 transition transform duration-500 cursor-pointer">
                {children}
            </div>

        </>
    )
} 

export default Card

/* 
tener un componente que te genera un mnodal
ese modal tiene un input que se almacenara
crear un atamo donde usamos el componente imagen de la libreria de css
en el src del comonente ponemos que utilizara una imagen por defecto
pero que si hay una tome la imagen del storage
!imagen ? imagendefault : imagen 
tenemos una props en el componente avatar
*/
