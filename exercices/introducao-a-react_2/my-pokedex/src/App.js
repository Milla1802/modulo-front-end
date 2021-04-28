import './App.css';
import pokemons from './data';
import Pokedex from './pokedex'

function App() {
  return (
    <Pokedex pokemon={ pokemons }/>
  );
}

export default App;
