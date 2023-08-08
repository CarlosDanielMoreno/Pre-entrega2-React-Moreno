import Itemcount from "../../Itemcount/Itemcount";

const ItemDetaild = ({id, name, img, description, price, stock}) =>{
   
    return(
        <div className="card">
        <><article className="has-text-centered ">
            <header>
                <h2 className="title is-1">{name}</h2>
            </header>
        </article><picture>
                <img src={img} alt={name} />
            </picture><section>
                <div className="content is-large">
                <p >{description}</p>
                <p >${price}</p>
                </div>
            </section><footer>
                <Itemcount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
            </footer></></div>
    
    )
}

export default ItemDetaild