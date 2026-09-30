import React from "react";

// As props são desestruturadas diretamente na assinatura da função.
const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Kilometragem: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  );
};

export default CarDetails;