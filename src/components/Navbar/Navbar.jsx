/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import { useEffect, useState } from "react"
import { CartContainer } from "../CartContainer/CartContainer"
import { getCategories } from "../../firebase/database"
import logo from "../../assets/logo-ecommerce.png"

export const Navbar = ({isCartOpen, setIsCartOpen}) =>{
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories(setCategories);
    }, []);
    return(
        <nav className={styles.containerNav}>
            <div className={styles.containerLogo}>
            <Link to='/'>
                <img src={logo} alt="logo" className={styles.logo}/>
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
            <CartContainer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
        </nav>
    )
}