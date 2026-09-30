const ChangeMessageState = ({ handleMessage }) => {
  // Dados locais utilizados pelos três botões.
  const messages = ["Oi", "Olá", "Tudo bem?"];

  return (
    <div>
      {/* Cada botão envia uma mensagem diferente para o componente pai. */}
      <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
      <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  );
};

export default ChangeMessageState;