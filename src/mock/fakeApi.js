const productos = 
[{id:'1', name:'pollo', stock:20, category:'mas vendidos',price: 100 ,descripcion: 'pollo hecho por heisenberg ', image: 'https://i.postimg.cc/wx17rQjJ/pollo.jpg'},

{id:'2', name:'tiras de pollo', stock:40, category:'ofertas',price: 200,descripcion:'tiras de pollo a lo pinkman', image:'https://i.postimg.cc/R00HZ54p/tiras-De-Pollo.jpg'},

{id:'3', name:'hamburguesa', stock:10, category:'Nuevos',price: 300, descripcion:'hamburgesas de pollo con ingredientes de la casa, al sazon de gustavo', image:'https://i.postimg.cc/QdKLGVWf/hamburguesa-De-Pollo.jpg'}]


export const getProducts = () =>{
        let error= false
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(error){
                    reject('no hay')
                }else{
                    resolve (productos)
                }
            }/*,3000*/)
        })
    }

