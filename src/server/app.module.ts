import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CodeGenerationService } from './code-generation/code-generation.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CodeGenerationService],
})
export class AppModule {}
