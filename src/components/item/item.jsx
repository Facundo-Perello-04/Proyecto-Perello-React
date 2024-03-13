import './item.css'
import {Link} from 'react-router-dom';
const Item = ({producto}) => {
    //const navegar = useNavigate()
    return(

<div className="card">
    <img src={producto.image} className="imagenProducto" alt={producto.name}/>
    <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <p>${producto.price}</p>
        <Link to={`/item/${producto.id} `} className="boton">ver mas</Link>
    </div>
</div>
    )
}
export default Item