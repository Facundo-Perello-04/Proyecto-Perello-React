
import './App.css';
import { Headers } from './components/headers/headers';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  const saludo='Hola mundo!'
  return (
    <div className="App">
      <Headers/>
      <ItemListContainer greeting='Bienvenidos a los pollos hermanos' saludo={saludo}/>
    </div>
  );
}

export default App;
