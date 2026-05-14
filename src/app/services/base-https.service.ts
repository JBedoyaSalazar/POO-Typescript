import axios from 'axios';

export class BaseHttpService<T> {

    constructor(
        private endPoint: string
    ) {}

    async getAll(): Promise<T[]> {
        const { data } = await axios.get<T[]>(this.endPoint);
        return data;
    }

    async update<ID, DTO>(id: ID, changes: DTO): Promise<T> {
        const { data } = await axios.put<T>(`${this.endPoint}/${id}`, changes);
        return data;
    }

    async findOne<ID>(id: ID): Promise<T | undefined> {
        const { data } = await axios.get<T>(`${this.endPoint}/${id}`);
        return data;
    }
}

(async () => {
    const API_URL = 'https://api.escuelajs.co/api/v1';

    // Ejemplo con Productos
    const productService = new BaseHttpService<any>(API_URL + '/products');
    const products = await productService.getAll();
    console.log(`products: ${products.length}`);

    // Ejemplo con Categorías
    const categoryService = new BaseHttpService<any>(API_URL + '/categories');
    const categories = await categoryService.getAll();
    console.log(`categories: ${categories.length}`);
})();