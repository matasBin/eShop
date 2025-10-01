import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className={"NavBar"}>
            <Link to={"/"}>
                <img className={"home"} src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_11-512.png" alt="Logo"/>
            </Link>
            <Link to={"/cart"}>
                <img className={"cart"} src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/cart_shop_buy_retail-512.png" alt="Cart"/>
            </Link>
        </div>
    );
};

export default NavBar;