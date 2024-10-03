/* eslint-disable react/prop-types */

import { useCartContext } from "../../context/cartContext"
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CartList } from "../CartList/CartList";
import { X } from 'lucide-react';
import styles from "./cartContainer.module.css"
import { CartWidget } from '../CartWidget/CartWidget';
import "./cartContainer.css"

export const CartContainer = ({isCartOpen, setIsCartOpen}) => {
    const { getPriceTotal } = useCartContext();
    const navigate = useNavigate();

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const handleCheckout = ()=>{
        setIsCartOpen(false);
        navigate('/checkout')
    }
    if (!isCartOpen) {
        return (
            <div className={styles.openCartButton}>
                <CartWidget  toggleCart = {toggleCart}/>
            </div>
        );
    }

    return (
        <>
        <CartWidget/>
        <div className={styles.cartContainer}>
            <div className={styles.cartContent}>
                <Button onClick={toggleCart} className={styles.closeButton} id='close-btn'>
                    <X size={24} />
                </Button>
                <h2 className={styles.cartTitle}>Cart</h2>
                <CartList className={styles.cartList}/>
                <div className={styles.total}>
                    Total: ${getPriceTotal().toFixed(2)}
                </div>
                <Button onClick={handleCheckout} as={Link} to="/checkout" className={styles.checkoutButton} id="checkout-btn">
                    Checkout
                </Button>
            </div>
        </div>
        </>
    )
}