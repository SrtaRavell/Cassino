import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Resultado = {add()}
        </p>
      </header>
    </div>
  );
}

function add() {
  const soma = 5 + 4
  return soma
}

export default App;
