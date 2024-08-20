import { CartWidget } from "./CartWidget"
import "./navbar.css"

export const Navbar = () =>{
    return(
        <nav className="container-nav">
            <div className="container-logo">
            <a href="./index.html" className="logo-style"><img src="./src/assets/logo-ecommerce.png" alt="logo" className="logo"></img></a>
            </div>
            <ul className="container-categorias">
                <li><a href="./index.html" className="categoria">Ropa</a></li>
                <li><a href="./index.html" className="categoria">Accesorios</a></li>
                <li><a href="./index.html" className="categoria">Zapatos</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}