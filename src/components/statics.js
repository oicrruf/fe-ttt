import React from "react";
import { FaBlackberry } from "react-icons/fa";
import { Bar } from 'react-chartjs-2'


function Statics() {
  const data = {
    labels: [ 'Ganados', 'Perdidos', 'Empatados'],
    datasets:[{
      label:'Juegos jugados',
      backgroundColor: 'rgb(238, 229, 217)',
      borderColor: 'black',
      hoverBackground: 'rgb(147, 210, 174)',
      data: ['305', '152', '85']
    }]
  };

  const opciones={
    mantainAspecRatio: false,
    responsive: true,
  }
  return (
    <div className="grafic" style={{width:100%Bar, height: '500px'}}>
      <h2>Estadisticas del juego</h2>
      <Bar data={data} options={opciones}/>
    </div>
    );
  }

  export { Statics };
