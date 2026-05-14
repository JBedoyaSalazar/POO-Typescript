import { faker } from '@faker-js/faker';
import type { Product } from '../models/product.model.js';
import type { CreateProductDto, UpdateProductDto } from '../dtos/product.dto.js';
import type { IProductService } from '../models/product-service.model.js';


export class ProductService implements IProductService {

    private products: Product[] = [];

    create(data: CreateProductDto): Product {
        const newProduct: Product = {
            ...data,
            id: faker.number.int(),
            category: {
                id: data.categoryId,
                name: faker.commerce.department(),
                image: faker.image.url()
            }
        }
        return this.add(newProduct);
    }

    add(product: Product) {
        this.products.push(product);
        return product;
    }

    update(id: Product['id'], changes: UpdateProductDto): Product {
        const index = this.products.findIndex(item => item.id === id);
        const prevData = this.products[index];
        if (!prevData) {
            throw new Error('Product not found');
        }
        this.products[index] = {
            ...prevData,
            ...changes
        }
        console.log('Producto actualizado', this.products[index]);
        return this.products[index];
    }

    findOne(id: Product['id']) {
        return this.products.find(item => item.id === id);
    }

    getAll(): Product[] {
        return this.products;
    }
}


