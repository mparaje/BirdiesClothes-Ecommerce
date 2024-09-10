import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from '../components/Navbar/Navbar'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer"


export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/product/:id" element={<ItemDetailContainer/>} />
                <Route path="/category/:id" element={<ItemListContainer/>} />
            </Routes>
        </BrowserRouter>
    )
}