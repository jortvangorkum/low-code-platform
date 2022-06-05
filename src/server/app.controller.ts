import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('code')
  generateCode(): string {
    return this.appService.generateCode();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
