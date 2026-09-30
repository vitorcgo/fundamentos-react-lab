import { useState } from "react";

const ManageData = () => {
  // Valor comum: não possui setter do React.
  let someData = 10;

  // State: quando atualizado, React renderiza novamente o componente.
  const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>

        {/* A variável muda internamente, mas React não é avisado. */}
        <button onClick={() => (someData = 15)}>
          Mudar variável
        </button>
      </div>

      <div>
        <p>Valor: {anotherNumber}</p>

        {/* O setter atualiza o state e solicita nova renderização. */}
        <button onClick={() => setAnotherNumber(20)}>
          Mudar state
        </button>
      </div>
    </div>
  );
};

export default ManageData;