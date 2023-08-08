import img1 from './img/y1.jpg';
import img2 from './img/y2.jpg';
import img3 from './img/y3.jpg';

const products = [
    {
        id: '1', name:'Hamburguesa Wagyu A5',category: 'Hamburguesa', price: 600, img: img1, stock: 6, description:'amburguesas Wagyu formadas a partir de recortes de carne y grasa derivados de Ribye'
    },
    {
        id: '2', name:'Top Sirloin',category: 'top', price: 700, img:img2, stock: 8, description:'El Top Sirloin es un filete sin hueso proveniente del área media baja de la res (entre el lomo y la pierna).'
    },
    {
        id: '3', name:'RibEye Hokkaido Wagyu A5',category: 'RibEye', price: 1500, img: img3, stock: 10, description:'El Ribeye, también llamado ‘’Ojo de Bife’’ u ‘’Ojo de Costilla’’, es un filete sin hueso proveniente de la sección del costillar de la res'
    }
]

export const getProducto = ()=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}
export const getProductByid =(productId) =>{
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter(prod => prod.category === categoryId))

        }, 500)

    })

};