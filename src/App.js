
import './App.css';
import { Headers } from './components/headers/headers';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Headers/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Bienvenidos a los pollos hermanos' />}/>
        <Route path='/categories/:categoryId' element={<ItemListContainer greeting='categoria: '/>} />
        <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/>
      </Routes>
      
      
      
    </BrowserRouter>
  );
}

export default App;
