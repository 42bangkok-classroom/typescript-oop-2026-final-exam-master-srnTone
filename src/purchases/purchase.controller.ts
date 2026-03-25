import { Controller, Get } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { ProductItem } from 'src/products/product.interface';

@Controller()
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  findAll(): ProductItem[] {
    return this.purchaseService.findAll();
  }
}
