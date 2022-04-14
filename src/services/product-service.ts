import http from "../http-common";
import type { Product } from '../models/product';

class ProductService {

    findAll(): Promise<any> {
        return http.get("/products");
    }

    findById(id: number): Promise<any> {
        return http.get(`/products/${id}`);
    }

    create(item: Product): Promise<any> {
        return http.post("/products", item);
    }

    update(id: number, item: Product): Promise<any> {
        return http.put(`/products/${id}`, item);
    }

    delete(id: number): Promise<any> {
        console.log(id);
        return http.delete(`/products/${id}`);
    }

    deleteAll(): Promise<any> {
        return http.delete(`/products`);
    }

    findByCode(code: string): Promise<any> {
        return http.get(`/products?code=${code}`);
    }
}

export default new ProductService();