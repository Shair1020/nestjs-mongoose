import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const product = await this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return {
      status: true,
      msg: 'product created successfully',
      data: product,
    };
  }

  @Get()
  async getAllProducts() {
    const products = await this.productsService.getAllProducts();
    return {
      status: true,
      msg: 'fetch all products',
      data: products,
    };
  }

  @Get(':id')
  async getProduct(@Param('id') prodId: string) {
    const product = await this.productsService.getProduct(prodId);
    return {
      status: true,
      msg: 'fetch single product',
      data: product,
    };
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const product = await this.productsService.updateProduct(
      prodId,
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return {
      status: true,
      msg: 'product updated successfully',
      data: product,
    };
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    this.productsService.deleteProduct(prodId);
    return {
      msg: 'delete successfully',
    };
  }
}
