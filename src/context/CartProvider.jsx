/* eslint-disable react/prop-types */

import { cartContext } from "./cartContext";
import { useState } from "react";

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    
    const addToCart = (item, quantity) => {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, {...item, quantity}]);
        }
    }

    const deleteFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    }

    const updateQuantity = (productId, newQuantity) => {
        setCart(cart.map(item => 
            item.id === productId ? { ...item, quantity: newQuantity } : item
        ));
    };

    const getPriceTotal = () => {
        const prices = cart.map((item) => item.price * item.quantity);
        const total = prices.reduce((acc, curr) => acc + curr , 0);
        return total;
    }

    return (
        <cartContext.Provider value={{cart, addToCart, getPriceTotal, deleteFromCart, updateQuantity}}>
            {children}
        </cartContext.Provider>
    )
}