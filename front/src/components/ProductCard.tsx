import React from 'react';
import {Product} from "../types/product";
import {Link} from "react-router-dom";
import {cartStore} from "../store/allStatesStore";

type ProductCardProps = {
    item: Product
}

const ProductCard = ({item}: ProductCardProps) => {

    const cart = cartStore((state) => state.cart)
    const setCart = cartStore((state) => state.setCart)

    /*Adds the product to cart*/
    function addToCart() {
        if(item) {
            setCart([...cart, item])
        }
    }

    return (
        <div className={"ProductCard"}>
                <div className="card">
                    <div className="card__shine"></div>
                    <div className="card__glow"></div>
                    <div className="card__content">

                        <Link to={`/product/${item.id}`}>
                        <div className="card__badge">NEW</div>
                        <div style={{backgroundColor: "#a78bfa"}} className="card__image">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="card__text">
                            <p className="card__title">{item.title}</p>
                            <p className="card__description">{item.description}</p>
                        </div>
                        </Link>

                        <div className="card__footer">
                            <div className="card__price">{item.price}$</div>
                            <div className="card__button" onClick={addToCart}>
                                <svg height="16" width="16" viewBox="0 0 24 24">
                                    <path
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        d="M4 12H20M12 4V20"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ProductCard;