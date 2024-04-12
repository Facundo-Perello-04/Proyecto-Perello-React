//import React from 'react';

import './itemListContainer.css'
import React, { useState, useEffect } from 'react';
import { getProducts } from '../../mock/fakeApi';
import ItemList from '../itemList/itemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

function ItemListContainer  ({greeting}) {
const [productos, setProductos]= useState([])   
const {categoryId} = useParams()

// useEffect(()=>{
//     getProducts()
//     .then((res)=>{
//         if(categoryId){
//             setProductos(res.filter((prod)=> prod.category === categoryId))

//         }else{
//             setProductos(res)
//         }
//     })
//     .catch((error)=> console.log(error, 'todo mal'))
// },[categoryId])



//firebase
useEffect(()=>{
    const productsCollection= categoryId ? query(collection(db,"productos"),where("category", "==", categoryId)) :collection(db, "productos")
    getDocs(productsCollection)
    .then((res)=>{
        const list = res.docs.map((product)=>{
            return{
                id:product.id,
                ...product.data()
            }
        })
        setProductos(list)
    })
    .catch((error)=> console.log(error))
},[categoryId])

    return(
        <div>
            {categoryId ?  <h1 className='titulo'>{greeting} <span>{categoryId}</span></h1>: <h1 className='titulo'>{greeting}</h1> }
            
            <ItemList productos={productos}/>
            
            
        </div>

    );
    }
export default ItemListContainer;