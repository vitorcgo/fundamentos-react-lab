import React from "react";

const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>

      <ul>
        <li>Marca: {brand}</li>
        <li>Kilometragem: {km}</li>
        <li>Cor: {color}</li>
      </ul>

      {/* Renderização condicional baseada na quilometragem. */}
      {km === 0 ? <p>Carro novo</p> : <p>Carro usado</p>}
    </div>
  );
};

export default CarDetails;