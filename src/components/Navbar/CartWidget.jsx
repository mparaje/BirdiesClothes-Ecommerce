import { Link } from "react-router-dom"
import styles from "./navbar.module.css"

export const CartWidget = () =>{
    return(
        <section className={styles.containerCarrito}>
            <div className={styles.logoCarrito}>
                <Link to='/carrito' className={styles.carritoStyle}>🛒</Link>
            </div>
            <div className={styles.cantidadCarrito}>3</div>
        </section>
    )
}