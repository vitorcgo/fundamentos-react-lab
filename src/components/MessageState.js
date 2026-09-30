const MessageState = ({ msg }) => {
  return (
    <div>
      {/* O componente apenas exibe a mensagem recebida. */}
      <p>A mensagem é: {msg}</p>
    </div>
  );
};

export default MessageState;