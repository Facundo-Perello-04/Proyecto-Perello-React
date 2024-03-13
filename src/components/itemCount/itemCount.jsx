import React from "react";
import { useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css'
const ItemCount = ({stock}) => {
    const [count, setCount]=useState(1)
    const sumar = () =>{
        if(count < stock){
            setCount (count + 1)

        }
        
        
    } 
    const restar = () =>{
        if(count > 0){
            setCount (count - 1)
        }
        
        
    }  
    const onAdd = () =>{

    }
    return(
    <>
    <div className="seccionCompra">
        <button className="botonResta" onClick={restar}>-</button>
        <span className="contador">{count}</span>
        <button className="botonSuma" onClick={sumar}>+</button>
    </div>
    <button className="botonCompra" disabled={stock === 0 || count === 0 } onClick={onAdd}>comprar</button>

    </>
    )
}
export default ItemCount