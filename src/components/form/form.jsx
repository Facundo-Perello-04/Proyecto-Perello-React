import React from "react";

import './form.css';
import { useState } from "react";
const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [feedback,setFeedBack] = useState('')
    const capturaNombre = (e) =>{
    setName(e.target.value)
    }
    const capturaEmail = (e) =>{
    setEmail(e.target.value)
    }
    console.log(name,email,telephone)
    const enviarDatos = (e) => {
        e.preventDefault()
        if(name === '' || email === '' || telephone === ''){
            alert('complete el formulario')
            setFeedBack('')
        }else {
            console.log(
                {
                    nombreCompleto:name,
                    correo:email,
                    telefono:telephone
                }
                )
                setFeedBack('se envio con exito!')
        }
        
    }
    if (feedback!== ''){
        return <p>{feedback}</p>
    }
    return (
        <div className="caja">
        
        <form className="formulario" onSubmit={enviarDatos}>
            <input className="controls" type="text" placeholder="Escriba su nombre" onChange={capturaNombre}/>
            <input className="controls"  type="email" placeholder="Escriba su correo" onChange={capturaEmail} />
            <input className="controls"  type="number" placeholder="Escriba su telefono" onChange={(e)=>setTelephone(e.target.value)} />
            <button className="botones"  type="sumbit">Enviar</button>
        </form>
        <p>{name}</p>
        <p>{email}</p>
        <p>{telephone}</p>
        </div>
    )
}
export default Form;