import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Product} from "../types/product";

const SingleProductPage = () => {

    const {id} = useParams<{ id: string }>()
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await res.json()
                console.log(data)
                if(data) {
                    setProduct(data)
                } else {
                    alert("Product not found")
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchProduct()
    }, [])

    return (
        <div className={"SingleProductPage"}>
            {
                product &&
                <>
                    <div className="imageBox">
                        <img src={product.image} alt=""/>
                    </div>
                    <div className="productInfo">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                </>

            }

        </div>
    );
};

export default SingleProductPage;