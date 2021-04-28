import './App.css';
import pokemons from './data';
import Pokedex from './pokedex'
import './style.css'; 

function App() {
  return (
    <section className="appContainer">
      <h1>Pokedex</h1>
      <Pokedex pokemon={ pokemons }/>
    </section>
  );
}

export default App;
