import React, { useContext } from "react";
import CartView from "../cartView/CartView";
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom';
const Cart = () => {
    const {cart}= useContext(CartContext)
    return(
        <div>
            {!cart.length ? <div><h1>Tu carrito esta vacio</h1>
            <Link to='/'>Ir a comprar</Link>



            </div> 
            :<CartView/>}
        </div>
    )
}

export default Cart