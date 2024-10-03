import { useCartContext } from "../../context/cartContext"
import { Cart } from "../Cart/Cart";
import styles from "./cartList.module.css"

export const CartList = () => {
    const {cart} = useCartContext();
    return(
        <div className={styles.cartList}>
            {cart.map(item=>
            <Cart item = {item} key={item.id}/>)}
        </div>
    )
}