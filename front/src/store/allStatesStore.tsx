import {create} from "zustand"
import {Product} from "../types/product";


type ProductStore = {
    productsArray: Product[],
    setProducts: (newProducts: Product[]) => void
}

type CartStore = {
    cart: Product[],
    setCart: (newCart: Product[]) => void
}

type FilteredStore = {
    filteredProductsArray: Product[],
    setFilteredProductsArray: (newProducts: Product[]) => void
}


const productStore = create<ProductStore>((set) => ({
    productsArray: [],
    setProducts: (newProducts) => set({productsArray: newProducts})
}))

const filteredProductStore = create<FilteredStore>((set) => ({
    filteredProductsArray: [],
    setFilteredProductsArray: (newFilteredProducts) => set({filteredProductsArray: newFilteredProducts})
}))

const cartStore = create<CartStore>((set) => ({
    cart: [],
    setCart: (newCart) => set({cart: newCart})
}))

export {productStore, cartStore, filteredProductStore}