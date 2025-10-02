import React from 'react';
import {Link} from "react-router-dom"
import {cartStore} from "../store/allStatesStore";

const NavBar = () => {

    const cart = cartStore((state) => state.cart)

    return (
        <div className={"NavBar"}>
            <Link to={"/"}>
                <img className={"home"} src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_11-512.png" alt="Logo"/>
            </Link>
            <div className="cart">
                <Link to={"/cart"}>
                    <img className={"cartImg"} src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/cart_shop_buy_retail-512.png" alt="Cart"/>
                    <div className={`cartCount ${cart.length > 0 ? "showCart" : ""}`}>{cart.length}</div>
                </Link>
            </div>

        </div>
    );
};

export default NavBar;