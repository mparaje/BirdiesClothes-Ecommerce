import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import { useEffect, useState } from "react"

export const Navbar = () =>{
    const [categories, setCategories] = useState([]);

    useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(res => setCategories(res)) // Guardar las categorías obtenidas
      .catch(error => {
        console.error("Error fetching categories:", error);
      });
    }, []);
    return(
        <nav className={styles.containerNav}>
            <div className={styles.containerLogo}>
            <Link to='/'>
                <img src="./src/assets/logo-ecommerce.png" alt="logo" className={styles.logo}/>
            </Link>
            </div>
            <ul className={styles.containerCategorias}>
                {categories.map((cat)=>(
                        <li key={cat}>
                            <Link to={`category/${cat}`} className={styles.categoria}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Link>
                        </li>
                ))                
                }
            </ul>
            <CartWidget/>
        </nav>
    )
}