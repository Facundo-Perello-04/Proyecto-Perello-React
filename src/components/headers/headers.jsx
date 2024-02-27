import "./headers.css"
import CartWidget from "../cartWidget/CartWidget";
import logoTienda from '../imgs/logoTienda.png'
export const Headers = () => {
    return(  
    <header className="encabezado">
        <div className="logo"><img src={logoTienda} alt="logotienda" /></div>
        <nav className="menuHeader">
            <a href="/" className="nav-link">Inicio</a>
            <a href="/" className="nav-link">Quienes somos</a>
            <a href="/" className="nav-link">Productos</a>
            
        
        </nav>
        <CartWidget/>
        
        


    </header>
)

};
