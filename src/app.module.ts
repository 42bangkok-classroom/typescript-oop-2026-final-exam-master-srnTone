import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiExceptionFilter } from './common/api-exception.filter';
import { PurchaseModule } from './purchases/purchase.module';
import { PurchaseController } from './purchases/purchase.controller';
import { ProductController } from './products/product.controller';
import { PurchaseService } from './purchases/purchase.service';
import { ProductService } from './products/product.service';

@Module({
  imports: [PurchaseModule, PurchaseModule],
  controllers: [AppController, PurchaseController, ProductController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ApiExceptionFilter,
    },PurchaseService,ProductService
  ],
})
export class AppModule {}
