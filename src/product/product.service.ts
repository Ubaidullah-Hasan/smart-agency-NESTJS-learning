import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  private products: (CreateProductDto & { id: number })[] = [];
  // : Array<CreateProductDto & { id: number } >

  createProduct(productData: CreateProductDto) {
    const newProduct = {
      id: this.products.length + 1,
      ...productData,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  getAllProducts(): (CreateProductDto & { id: number })[] {
    return this.products;
  }

  findOneProduct(id: number) {
    return this.products.find((p) => p.id === id);
  }

  updateProduct(id: number, data: CreateProductDto) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      product.name = data.name;
      product.price = data.price;
      return product;
    }
    return null;
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((p) => p.id !== id);
    return { message: 'Deleted' };
  }

}
