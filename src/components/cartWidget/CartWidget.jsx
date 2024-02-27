import './cartWidget.css'
import logoCarro from '../imgs/logoCarro.png'
const CartWidget = () => {
    return(
        <div className='logo'>
        <img  src={logoCarro} alt="carrito" />
        <span className='badge'>5</span>
        </div>



    )
};
export default CartWidget