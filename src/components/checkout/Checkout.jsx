import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase";
import { Link } from "react-router-dom";
const Checkout = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [validateEmail,setValidateEmail]=useState('')
    const [user, setUser] = useState([]);
    const {cart, cartPriceTotal} = useContext(CartContext)
    const [orderId,setOrderId] = useState('')
    const nameHandler = (e) =>{
        setName(e.target.value);
    }
    //funcion dinamica
    const userData = (e)=>{
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value 
            }
        )
    }
    console.log(name,lastname,email)
    const finalizarCompra = (e)=>{
        e.preventDefault();
        if(!user.name || !user.lastname||!user.email){
                alert("Todos los campos son obligatorios")
        }else if(user.email !== validateEmail){
            alert('los mails deben ser iguales')
        }else{
            let order ={
                user,
                items: cart,
                total:cartPriceTotal(),
                date:serverTimestamp()
            }
            const ventas = collection(db,'orders')
            addDoc(ventas,order)
            .then((res)=>{
                setOrderId(res.id)
                console.log(res.id)
                
                
        })
            .catch((error)=> console.log(error))
        }
    }
    return (
        <div>
            {
                orderId !==''
                ?<div>
                    <h3>Orden realizada con exito</h3>
                    <p>ID de la orden:{orderId}</p>
                    <Link to='/'>Volver a inicio</Link>
                </div>
                :
                <div className="caja">
            <h4>Completa tus datos</h4>
            <form className="formulario" onSubmit={finalizarCompra}>
                <input className="controls" name='name' placeholder='ingrese su nombre' type='text' onChange={userData}/>
                <input className="controls" name='lastname' placeholder='ingrese su apellido' type='text' onChange={userData} />
                <input className="controls" name='email' placeholder="ingrese su correo" type='email' onChange={userData}/>
                <input className="controls" name='second-email' placeholder="ingrese su correo devuelta" type='email' onChange={(e)=>setValidateEmail(e.target.value)}/>
                <button type='submit' className="boton">Enviar</button>
            </form>
        </div>
            }
        </div>

        
    )


}
export default Checkout