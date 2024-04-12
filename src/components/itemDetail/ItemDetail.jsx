import React, { useContext, useState } from "react";
import ItemCount from "../itemCount/itemCount";
import { CartContext } from "../../context/CartContext";
const ItemDetail = ({producto}) => {
//const [cantidadAgregada, setCantidadAgregada]  = useState  (0)
const [compra, setCompra] = useState (false)
//ADDITEM
const {addItem} = useContext(CartContext) 
//
    const onAdd = (cantidad)=>{
        //console.log('compraste un item', cantidad)
        addItem(producto, cantidad)
        //setCantidadAgregada(cantidad)
        setCompra(true)
    }
    //console.log(cantidadAgregada)
    return(
        <div className="card">
            <h3 className="titulo">Detalle de: {producto.name}</h3>
            <img src={producto.image} alt={producto.name} className="imagenProducto" />
            <p className="card-text">{producto.descripcion}</p>
            <p className="producto-precio">${producto.price}</p>
            { compra ? <button>Ir al carrito</button> : <ItemCount stock={producto.stock} onAdd={onAdd}/>}
            {/*cantidadAgregada > 0 ? <button>Ir al carrito</button> : <ItemCount stock={producto.stock} onAdd={onAdd}/>*/}
            


        </div>
    )
}
export default ItemDetail