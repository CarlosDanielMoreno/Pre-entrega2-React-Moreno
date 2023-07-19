import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
       
            <nav className="navbar">
                 <a class="navbar-item"><h3 className="title">YANAGIYA</h3></a>
                
                    <div className="navbar-start ml-1 ">
                    <button className="button is-white ">Home</button>
                    <button className="button is-white ">Nuestra carne</button>
                    <button className="button is-white ">Tienda</button>
                    <button className="button is-white ">Recetas</button>   
                    </div>
                    <div className=""><CartWidget/></div>
            </nav>
            
            
       
    )
}
export default NavBar