import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/about')
  getAbout(): string {
    return 'এইটা আমার প্রথম NestJS অ্যাপ!';
  }
}
