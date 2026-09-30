import React from "react";

const ConditionalRender = () => {
  const x = true;
  const name = "Matheus";

  return (
    <div>
      <h3>Isso será exibido?</h3>

      {/* Renderiza somente se x for true. */}
      {x && <p>Se x for true sim!</p>}

      <h3>Render ternário:</h3>

      {/* O ternário escolhe entre duas alternativas. */}
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;