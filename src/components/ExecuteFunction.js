import React from "react";

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      {/* Ao clicar, executamos a função que veio por props. */}
      <button onClick={myFunction}>Clique em mim</button>
    </div>
  );
};

export default ExecuteFunction;