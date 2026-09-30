import './App.css'
import city from "./assets/city.jpg";

function App() {

  return (

    <div className="App">
      <h1>Seção 3</h1>

      <div>
        {/* Asset da pasta public */}
        <img src="/img1.jpg" alt="Paisagem" />

        {/* Asset importado de src/assets */}
        <img src={city} alt="Cidade" />
      </div>
    </div>




  )
}

export default App
