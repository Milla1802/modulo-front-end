/* import logo from './logo.svg'; */
import './App.css';


const arrayCompromissos = ['Acordar', 'Estuadar de manhã', 'Almoçar', 'Arrumar cozinha', 'Estudar de tarde','Jantar', 'Dormir'];

const ListaDeCompromissos = (array) => {
  return array.map((compromiso) => <li>{compromiso}</li>);
}

function App() {
  return (
    ListaDeCompromissos(arrayCompromissos)
  
  );
}

export default App;
