import axios from "axios"
import type { Product } from "./models/product.model.js"

(async () => {
    async function getProductsId(): Promise<number[]> {
        const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
        return data.map(product => product.id)
    }

    console.log('------'.repeat(10))
    const productsIds = await getProductsId()
    console.log(productsIds)
})()

