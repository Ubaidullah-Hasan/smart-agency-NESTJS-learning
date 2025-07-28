import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString({message: 'Name must be a string'})
  @IsNotEmpty({message: 'Name is required'})
  name: string;

  @IsNumber({}, {message: 'Price must be a number'})
  price: number;

  @IsNumber({maxDecimalPlaces: 0}, {message: 'Stock must be an integer'})
  stock: number;
}
