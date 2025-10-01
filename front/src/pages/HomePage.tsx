import React, {useEffect} from 'react';
import {productStore} from "../store/allStatesStore";
import ProductCard from "../components/ProductCard";

const HomePage = () => {

    const productsArray = productStore((state) => state.productsArray)
    const setProductsArray = productStore((state) => state.setProducts)

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json()
                console.log(data)
                setProductsArray(data)
            } catch (e) {
                console.log(e)

            }
        }
        fetchProducts()
    }, [])

    return (
        <div className={"HomePage"}>

            {
                productsArray &&
                productsArray.map((item, index) =>
                <ProductCard key={index} item={item}/>
                )
            }

        </div>
    );
};

export default HomePage;