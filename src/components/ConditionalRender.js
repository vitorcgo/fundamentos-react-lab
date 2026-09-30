import React from "react";

const ConditionalRender = () => {
  // Altere para false e observe a diferença na interface.
  const x = true;

  return (
    <div>
      <h3>Isso será exibido?</h3>

      {/* O parágrafo só será renderizado quando x for true. */}
      {x && <p>Se x for true sim!</p>}
    </div>
  );
};

export default ConditionalRender;