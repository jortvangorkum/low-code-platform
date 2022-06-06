import { Body, Controller, Get, Post } from '@nestjs/common';
import { CodeGenerationService } from './code-generation/code-generation.service';
import EdgeDto from './dto/edge.dto';
import NodeDto from './dto/node.dto';

interface GenerateCodeBody {
  nodes: NodeDto[];
  edges: EdgeDto[];
}

@Controller()
export class AppController {
  constructor(private readonly codeGenerationService: CodeGenerationService) {}

  @Post('code')
  generateCode(@Body() body: GenerateCodeBody): string {
    const code = this.codeGenerationService.generateCode(body);
    console.log(code);
    return code;
  }
}
