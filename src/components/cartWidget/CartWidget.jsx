import './cartWidget.css'
import logoCarro from '../imgs/logoCarro.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const CartWidget = ({counter}) => {
    const {cartQuantity}= useContext(CartContext)
//    console.log(cart,'en el navbar')
    return(
        <div className='logo'>
        <img  src={logoCarro} alt="carrito" />
        {cartQuantity() > 0 &&  <span className='badge'>{cartQuantity()}</span>}
        </div>



    )
};
export default CartWidget