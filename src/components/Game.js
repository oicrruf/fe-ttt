import React from "react";
import { useParams } from "react-router-dom";

const Game = () => {
  let { id } = useParams();

  return (
    <>
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-primary">
              Nuevo Juego con ID: {id}{" "}
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};

export { Game };
