import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDotenv } from 'dotenv';

configDotenv();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432'),
      username: process.env.DB_USERNAME, // ← তোমার username
      password: process.env.DB_PASSWORD, // ← তোমার password
      database: process.env.DB_NAME, // ← তৈরি করা database
      autoLoadEntities: true,
      synchronize: true, // ডেভ সময় true রাখো, প্রোডাকশনে false
      logging: process.env.NODE_ENV === 'development' ? ['query', 'error'] : ['error'] // ডেভ সময় true রাখো, প্রোডাকশনে false
    }),
    UserModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }