import React from "react";
import ItemCount from "../itemCount/itemCount";
const ItemDetail = ({producto}) => {
    return(
        <div>
            <h3>Detalle de: {producto.name}</h3>
            <img src={producto.image} alt={producto.name} />
            <p>{producto.descripcion}</p>
            <p>${producto.price}</p>
            <ItemCount stock={producto.stock}/>
            


        </div>
    )
}
export default ItemDetail