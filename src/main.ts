import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import { createDatabase } from './utils/createDatabase';

configDotenv();


async function bootstrap() {
  try {
    if (process.env.NODE_ENV === 'development') {
      await createDatabase();
    }

    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes( // for DTO validation
      new ValidationPipe({
        whitelist: true, // ডিকোরেটর না থাকা প্রপার্টি ফিল্টার করে
        forbidNonWhitelisted: true, // হোয়াইটলিস্টে নেই এমন প্রপার্টি থাকলে এরর দেবে
        transform: true, // পেয়লোডকে স্বয়ংক্রিয়ভাবে DTO ক্লাসে কনভার্ট করবে
        transformOptions: {
          enableImplicitConversion: true, // ইমপ্লিসিট কনভার্শন চালু করে
        },
      }),
    );

    await app.listen(process.env.PORT || 3000);
    console.log(`🚀 Application running on: ${await app.getUrl()}`);
  } catch (err) {
    console.error('❌ Application startup failed:', err);
    process.exit(1);
  }
}

bootstrap();