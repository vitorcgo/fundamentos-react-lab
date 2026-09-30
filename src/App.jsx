import { Fragment, useState } from "react";
import "./App.css";

import city from "./assets/city.jpg";
import CarDetails from "./components/CarDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import MessageState from "./components/MessageState";
import ShowUserName from "./components/ShowUserName";

function App() {
  // Coleção utilizada para demonstrar componentização + map().
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", km: 32000 },
    { id: 4, brand: "Tesla", color: "Preto", km: 12000 },
    { id: 5, brand: "Toyota", color: "Prata", km: 85000 },
  ];

  // Função criada no componente pai e enviada para um filho por props.
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // State compartilhado entre MessageState e ChangeMessageState.
  const [message, setMessage] = useState();

  // Handler responsável por atualizar a mensagem compartilhada.
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Seção 3</h1>

      <div>
        {/* Asset da pasta public */}
        <img src="/img1.jpg" alt="Paisagem" />

        {/* Asset importado de src/assets */}
        <img src={city} alt="Cidade" />
      </div>

      {/* Variável comum x useState */}
      <ManageData />

      {/* map(), key, objetos e filter() */}
      <ListRender />

      {/* && e operador ternário */}
      <ConditionalRender />

      {/* Props no formato tradicional */}
      <ShowUserName name="Matheus" />

      {/* Props com destructuring */}
      <CarDetails brand="Ford" color="Azul" km={10000} />

      {/* Reaproveitamento manual do mesmo componente */}
      <CarDetails brand="VW" color="Vermelho" km={535} />
      <CarDetails brand="Fiat" color="Branco" km={0} />

      {/* Renderização dinâmica de componentes a partir de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}

      {/* Fragment */}
      <Fragment />

      {/* children */}
      <Container>
        <p>Eu sou do componente superior</p>
      </Container>

      <Container>
        <div>
          <p>Eu também</p>
        </div>
      </Container>

      {/* Função do pai executada pelo filho */}
      <ExecuteFunction myFunction={showMessage} />

      {/* Lifting state */}
      <MessageState msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;