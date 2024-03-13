import "./headers.css"
import CartWidget from "../cartWidget/CartWidget";
import logoTienda from '../imgs/logoTienda.png'
import { NavLink } from "react-router-dom";
export const Headers = () => {
    return(  
    <header className="encabezado">
        <div className="logo"><img src={logoTienda} alt="logotienda" /></div>
        <nav className="menuHeader">
            <NavLink className="nav-link" to='/'>Todo</NavLink>
            <NavLink className="nav-link" to='/categories/ofertas'>Ofertas</NavLink>
            <NavLink className="nav-link" to='/categories/mas vendidos'>Mas vendidos</NavLink>
            <NavLink className="nav-link" to='/categories/Nuevos'>Nuevos</NavLink>
            
            
        
        </nav>
        <CartWidget/>
        
        


    </header>
)

};
