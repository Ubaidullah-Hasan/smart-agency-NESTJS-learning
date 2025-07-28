import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(@Body() data: CreateProductDto) {
    return this.productService.createProduct(data);
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.productService.findOneProduct(id);
  }

  @Put(':id')
  update(@Param("id", ParseIntPipe) id: number, @Body() data: CreateProductDto) {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.productService.deleteProduct(id);
  }
}
