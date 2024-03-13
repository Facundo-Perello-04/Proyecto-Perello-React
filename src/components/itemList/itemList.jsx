import Item from "../item/item";
import './itemList.css'
const ItemList = ({productos}) => {
    return(
        <div className="list">
            {productos.map((producto)=> <Item key={producto.id} producto={producto}/>)}
        </div>
    )
}
export default ItemList