import { Injectable } from "@nestjs/common";
import { ProductModule } from "./product.module";
import { Product } from "./product.interface";
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ProductService {
private readonly dbPath = 'data/products.json';

    findAll(): Product<T> {
        const filePath = path.resolve(process.cwd(),'data/products.json');
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const users: Product<T> = JSON.parse(fileContent);
        return JSON.parse(fileContent);
}
 
}