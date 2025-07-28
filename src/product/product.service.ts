import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable() // This decorator marks the class as a provider that can be injected into other classes.
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  createProduct(productData: CreateProductDto) {
    const product = this.productRepository.create(productData); // This creates a new instance of the Product entity with the provided data. The create method does not save the entity to the database; it only prepares it.
    // console.log('Product created:', product);
    return this.productRepository.save(product); // This saves the newly created product to the database and returns the saved entity.
  }

  getAllProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOneProduct(id: number) {
    return this.productRepository.findOne({ where: { id } }); // This retrieves a single product by its ID. If no product is found, it returns null.
  }

  async update(id: number, data: CreateProductDto) {
    await this.productRepository.update(id, data);
    return this.findOneProduct(id);
  }

  deleteProduct(id: number) {
    return this.productRepository.delete(id); // This deletes a product by its ID. It returns an object containing the number of affected rows.
  }
}
