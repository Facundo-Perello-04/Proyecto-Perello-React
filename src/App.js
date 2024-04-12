
import './App.css';
import { Headers } from './components/headers/headers';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Form from './components/form/form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';

function App() {
  
  return (
  <CartProvider>
    <BrowserRouter>
      <Headers/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Bienvenidos a los pollos hermanos' />}/>
        <Route path='/categories/:categoryId' element={<ItemListContainer greeting='categoria: '/>} />
        <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/>
        <Route path='/form' element ={<Form/>}></Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      
      
      
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
