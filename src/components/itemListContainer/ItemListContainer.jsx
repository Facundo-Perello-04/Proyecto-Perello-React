import './itemListContainer.css'
const ItemListContainer = ({greeting, saludo}) =>{
    return(
        <div>
            <h1 className='titulo'>{greeting}</h1>
            <h3 className='subtituloPresentacion'>{saludo}</h3>

        </div>

    );
}
export default ItemListContainer;