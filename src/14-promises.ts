import axios from "axios"

(async () => {
    function delay (time: number) {
        const promise = new Promise<string>((res, rej) => {
            setTimeout(() => {
                res('Hola con delay')
            }, time)
        })
        return promise;
    }


    async function getProducts() {
        const res = await axios.get('https://api.escuelajs.co/api/v1/products')
        return res.data
    }

    const message = await delay(2000)
    console.log(message)

    console.log('------'.repeat(10))
    const products = await getProducts()
    console.log(products)
})()

