import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ProductService {
  private readonly filePath = path.resolve(process.cwd(), 'data/product.json');
  findAll(): Product {
    const fileContent = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(fileContent);
    }
}