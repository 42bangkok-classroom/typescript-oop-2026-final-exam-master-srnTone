import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ProductService {
  private readonly dbPath = 'data/products.json';

  findAll() {
    const filePath = path.resolve(process.cwd(), 'data/products.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  }
}
