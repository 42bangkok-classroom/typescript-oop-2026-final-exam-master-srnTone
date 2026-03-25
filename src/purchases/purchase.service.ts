import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class PurchaseService {
  private readonly dbPath = 'data/purchases.json';

  findAll(): string {
    const filePath = path.resolve(process.cwd(), 'data/purchases.json');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContents);
  }
}
