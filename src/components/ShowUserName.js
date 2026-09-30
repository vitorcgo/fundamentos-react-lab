const ShowUserName = (props) => {
  return (
    <div>
      {/* A prop name foi recebida do componente pai. */}
      <h2>O nome do usuário é: {props.name}</h2>
    </div>
  );
};

export default ShowUserName;