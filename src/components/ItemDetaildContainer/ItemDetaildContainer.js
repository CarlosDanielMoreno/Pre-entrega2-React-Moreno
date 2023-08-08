import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductByid } from "../ItemListContainer/Products/products"
import ItemDetaild from "./ItemDetaild/ItemDetaild"
const ItemDetaildContainer =()=>{
    const [product,setProduct] =useState(null)
    const {itemId} = useParams()
    useEffect(() =>{
        getProductByid(itemId)
        .then(response =>{
            setProduct(response)
        })
        .catch(error =>{
            console.error(error)
        })
    },[])


    return(
        <div>
            <ItemDetaild {...product}/>
        </div>
    )
}

export default ItemDetaildContainer
