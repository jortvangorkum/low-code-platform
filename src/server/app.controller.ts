import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import EdgeDto from './dto/edge.dto';
import NodeDto from './dto/node.dto';

interface GenerateCodeBody {
  nodes: NodeDto[];
  edges: EdgeDto[];
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('code')
  generateCode(@Body() body: GenerateCodeBody): string {
    console.log(body);
    return this.appService.generateCode();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
