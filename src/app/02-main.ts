import { ProductService } from "./services/product.service.js";
import { faker } from '@faker-js/faker';

const productService = new ProductService();

for (let index = 0; index < 10; index++) {
    productService.create({
        title: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        images: [faker.image.url()],
        categoryId: faker.number.int()
    });
}

const products = productService.productsList;
console.log(`Cantidad de productos: ${products.length}`);

const product = products[0];
const productId = product?.id ?? 0;

console.log('--- PROBANDO UPDATE ---');
productService.update(productId ?? 0, {
    title: 'Nombre de Producto Editado',
    price: 9999
});

console.log('--- PROBANDO FIND ONE ---');
const foundProduct = productService.findOne(productId);
console.log('Producto encontrado y actualizado:', foundProduct);
