import {create} from "zustand"
import {Product} from "../types/product";


type ProductStore = {
    productsArray: Product[],
    setProducts: (newProducts: Product[]) => void
}


const productStore = create<ProductStore>((set) => ({
    productsArray: [],
    setProducts: (newProducts) => set({productsArray: newProducts})
}))

export {productStore}