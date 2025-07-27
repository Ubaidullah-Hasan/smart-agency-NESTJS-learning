import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(data: CreateProductDto) {
    return this.productService.createProduct(data);
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }
  @Get(':id')
  findOne(id: number): (CreateProductDto & { id: number }) | null {
    return this.productService.findOneProduct(id);
  }

  @Put(':id')
  update(id: number, data: CreateProductDto) {
    return this.productService.updateProduct(id, data);
  }

  @Delete(':id')
  delete(id: number) {
    return this.productService.deleteProduct(id);
  }
}
