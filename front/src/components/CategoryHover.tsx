import React from 'react';
import {filteredProductStore, productStore} from "../store/allStatesStore";

const CategoryHover = () => {

    const productsArray = productStore((state) => state.productsArray)

    const setFilteredProducts = filteredProductStore((state) => state.setFilteredProductsArray)

    function filterProducts(category: string) {
        setFilteredProducts(productsArray.filter(product => product.category === category))
    }

    return (
        <div className={"CategoryHover"}>

            <div className="categoryBox">
                <p>Category</p>
            </div>


            <div className={"selection"}>
                <h4 onClick={() => filterProducts("men's clothing")}>Men's Clothing</h4>
                <h4 onClick={() => filterProducts("jewelery")}>Jewelery</h4>
                <h4 onClick={() => filterProducts("electronics")}>Electronics</h4>
                <h4 onClick={() => filterProducts("women's clothing")}>Women's Clothing</h4>
            </div>


        </div>
    );
};

export default CategoryHover;