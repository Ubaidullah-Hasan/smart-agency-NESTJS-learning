import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ডিকোরেটর না থাকা প্রপার্টি ফিল্টার করে
      forbidNonWhitelisted: true, // হোয়াইটলিস্টে নেই এমন প্রপার্টি থাকলে এরর দেবে
      transform: true, // পেয়লোডকে স্বয়ংক্রিয়ভাবে DTO ক্লাসে কনভার্ট করবে
      transformOptions: {
        enableImplicitConversion: true, // ইমপ্লিসিট কনভার্শন চালু করে
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
