import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      <h1>Conteúdo do componente pai:</h1>

      {/* Renderiza tudo o que foi colocado entre as tags de Container. */}
      {children}
    </div>
  );
};

export default Container;