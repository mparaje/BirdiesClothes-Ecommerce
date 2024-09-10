/* eslint-disable react/prop-types */
import {useState} from 'react'
import styles from './itemCount.module.css'

export const ItemCount = ({stock, initial, onAdd}) =>{
    const [quantity, setQuantity] = useState(initial)

    const increment = () =>{
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return(
        <>
            <div className={styles.btnContainerInDe}>
                <button onClick={decrement}>-</button>
                <p className={styles.quantity}>{quantity}</p>
                <button onClick={increment}>+</button>
            </div>
            <button className={styles.addToCartButton} onClick={()=>onAdd(quantity)} disabled={!stock}>Add to Cart</button>
        </>
    )
} 
