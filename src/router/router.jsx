import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from '../components/Navbar/Navbar'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer"
import { CartContainer } from "../components/CartContainer/CartContainer";
import {CheckoutContainer} from "../components/CheckoutContainer/CheckoutContainer"


export const AppRouter = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return(
        <BrowserRouter>
            <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/product/:id" element={<ItemDetailContainer/>} />
                <Route path="/category/:id" element={<ItemListContainer/>} />
                <Route path="/" element={<CartContainer/>} />
                <Route path="/checkout" element={<CheckoutContainer setIsCartOpen={setIsCartOpen}/>}/>
            </Routes>
        </BrowserRouter>
    )
}