import type { Product } from "./product.model.js";
import type { UpdateProductDto, CreateProductDto } from '../dtos/product.dto.js'

export interface IProductService {
    getAll(): Product[] | Promise<Product[]>;
    update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
    create(data: CreateProductDto): Product | Promise<Product>;
    findOne(id: Product['id']): Product | undefined | Promise<Product | undefined>;
}