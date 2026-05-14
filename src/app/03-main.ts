import { ProductHttpService } from './services/product-https.service.js'

(async () => {
    const productHttpService = new ProductHttpService();

    console.log('------'.repeat(10))
    console.log('Get All')
    const products = await productHttpService.getAll();
    console.log(products.length)
    console.log(products.map(product => product.id))

    const productId = products[0]?.id;

    if(productId){
        console.log('-------'.repeat(10))
        console.log('Find One Producto Antes De Actualizar')
        console.log(await productHttpService.findOne(productId))
    }

    if (productId) {
        console.log('-------'.repeat(10))
        console.log('Actualizando Producto')
        await productHttpService.update(productId, {
            price: 32123123,
            title: 'dsadsad',
            description: 'sdasfdsfdfsfdfd'
        })
    }

    if(productId){
        console.log('-------'.repeat(10))
        console.log('Find One Producto Después De Actualizar')
        console.log(await productHttpService.findOne(productId))
    }

})()