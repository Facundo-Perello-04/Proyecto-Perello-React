import { useEffect, useState } from "react";
import { getProducts } from "../../mock/fakeApi";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
//import { getOneProduct } from "../../mock/fakeApi";

const ItemDetailContainer = () =>{
    const [producto, setProducto ] = useState({})
    const [cargando, setCargando] = useState(false)
    const {itemId} = useParams()

    // useEffect (()=>{
    //     setCargando(true)
    //     getProducts()
    //     .then((res)=> setProducto(res.find((item)=> item.id === itemId)))
    //     .catch((error)=> console.log(error))
    //     .finally(()=>setCargando(false))

    // },[itemId])


 //firebase

    useEffect(()=>{
        setCargando(true)
        const collectionProd = collection(db,"productos")
        const referenciaDoc = doc(collectionProd, itemId)

        getDoc(referenciaDoc)
        .then((res)=>setProducto({id:res.id, ...res.data()}))
        .catch((error)=> console.log(error))
        .finally(()=>setCargando(false))
    },[itemId])
    return(
        <div>
            {cargando ? <h1>Cargando item</h1> : <ItemDetail producto={producto}/>}

        </div>
    )
}
export default ItemDetailContainer