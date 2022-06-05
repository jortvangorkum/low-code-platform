import { Injectable } from '@nestjs/common';
import { Project, VariableDeclarationKind } from 'ts-morph';

@Injectable()
export class AppService {
  generateCode(): string {
    const project = new Project();
    const sourceFile = project.createSourceFile('./build/compiled.ts');

    sourceFile.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: 'x',
          type: 'number',
          initializer: '5',
        },
      ],
    });

    sourceFile.formatText();
    return sourceFile.getText();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
