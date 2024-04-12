import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './cartView.css'
import { Link } from "react-router-dom"
const CartView = () => {
    const {cart, removeItem, cartPriceTotal,clear} = useContext(CartContext)
    return (
    <div>
        <h2 className="titulo">Tu carrito</h2>
        <div>
            {cart.map((compra)=>{
                return(
                    
                    <div className="card2" key={compra.id}>
                        <img className="imagen" src={compra.image} alt={compra.name} />
                        <span>{compra.name}  </span>
                        <span>cantidad:{compra.quantity} </span>
                        <span>Precio unidad:{compra.price}$ </span>
                        <span>Precio final: {compra.price * compra.quantity}$</span>
                        <button className="boton" onClick={()=>removeItem(compra.id)}>X</button>
                    </div>

                )
            })}
        </div>
        <p>Total a pagar: {cartPriceTotal()}</p>
        <button className="boton" onClick={clear}>Vaciar carrito</button>
        <Link className="boton" to='/checkout'>Finalizar compra</Link>
    </div>
    )
}
export default CartView