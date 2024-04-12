import { createContext, useState } from "react";

//se crea el contexto
export const CartContext = createContext()
//se crea el proveedor del contexto
export const CartProvider = ({children}) =>{
    const [cart, setCart]=useState([])
    //funcion addItem
    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            console.log('se suma')
            const nuevoCarrito = cart.map((compra)=>{
                if(compra.id === item.id){
                    return{...compra, quantity: compra.quantity + quantity}
                }else{
                    return compra
                }
            })
            setCart(nuevoCarrito)
        }else{
            setCart([...cart, {...item, quantity}])
        }
        
    }


    //remover items
    const clear = () =>{
        setCart([])
    }
    const removeItem =(itemId) =>{
        //const limpiarCarrito = cart.filter((compra)=>compra.id !== itemId)
        //setCart(limpiarCarrito)
        setCart(cart.filter((compra)=>compra.id !==itemId))
    }
    const isInCart =(itemId)=>{
        return cart.some((compra)=> compra.id === itemId)
    }
    //sumaba la cantidad total
    const cartQuantity = () =>{
        return cart.reduce((acc, compra)=> acc += compra.quantity, 0)
    }
    //sumar el total a pagar
    const cartPriceTotal = () =>{
        return cart.reduce((acc,compra)=> acc +=(compra.price*compra.quantity),0)
    }
    return(
        //se le asigna el contexto que provee
        <CartContext.Provider value={{cart,addItem,clear,removeItem,isInCart,cartQuantity,cartPriceTotal}}>
        {children}
        </CartContext.Provider>

    )
}