/* eslint-disable react/prop-types */

import styles from "./cartWidget.module.css"
import "./cartWidget.css"
import { useCartContext } from "../../context/cartContext"
import { Button } from "react-bootstrap"

export const CartWidget = ({toggleCart}) => {
    const { cart } = useCartContext();

    // Calcula la cantidad total de items en el carrito
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <section className={styles.containerCarrito}>
            <div className={styles.logoCarrito}>
                <Button onClick={toggleCart} id="carritoStyle">🛒</Button>
            </div>
            {totalItems > 0 && (
                <div className={styles.cantidadCarrito}>{totalItems}</div>
            )}
        </section>
    )
}