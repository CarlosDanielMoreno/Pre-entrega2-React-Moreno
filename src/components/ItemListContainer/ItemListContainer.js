import { useEffect, useState } from "react"
import { getProducto, getProductsByCategory } from "./Products/products"
import Itemlist from "./Itemlist/Itemlist"
import { useParams } from "react-router-dom"



const ItemListContainer = ({ greeting }) =>{
    const [products,setProducts] = useState ([])
    const {categoryId} =useParams()

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducto

        asyncFunc(categoryId)
            .then(response=>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div className="title">
            <h1>{greeting}</h1>
            <Itemlist products={products}/>
        </div>
    )
}

export default ItemListContainer