import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import CategoryHover from "./components/CategoryHover";

function App() {
    return (
        <div className="App">
            <BrowserRouter>

                <NavBar />
                <CategoryHover></CategoryHover>
                <Routes>

                    <Route path={"/"} element={<HomePage/>}></Route>
                    <Route path={"/product/:id"} element={<SingleProductPage/>}></Route>
                    <Route path={"/cart"} element={<CartPage/>}></Route>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
