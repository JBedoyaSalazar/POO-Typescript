import type { UpdateProductDto, CreateProductDto } from "../dtos/product.dto.js";
import type { IProductService } from "../models/product-service.model.js";
import type { Product } from "../models/product.model.js";
import axios from "axios";

export class ProductHttpService implements IProductService {
    private readonly API_URL = 'https://api.escuelajs.co/api/v1/products';

    async getAll(): Promise<Product[]> {
        const { data } = await axios.get<Product[]>(this.API_URL);
        return data;
    }

    async update(id: Product["id"], changes: UpdateProductDto): Promise<Product> {
        const product = await this.findOne(id);
        if (!product) {
            throw new Error('Product not found');
        }
        
        const dto: UpdateProductDto = {
            title: product.title,
            price: product.price,
            description: product.description,
            images: product.images,
            categoryId: product.category.id,
            ...changes
        };

        const { data } = await axios.put<Product>(`${this.API_URL}/${id}`, dto);
        return data;
    }

    async create(data: CreateProductDto): Promise<Product> {
        const { data: product } = await axios.post<Product>(this.API_URL, data);
        return product;
    }

    async findOne(id: Product["id"]): Promise<Product | undefined> {
        const { data } = await axios.get<Product>(`${this.API_URL}/${id}`);
        return data;
    }
}