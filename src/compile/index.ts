import { Node } from 'react-flow-renderer';
import { Project, VariableDeclarationKind } from 'ts-morph';
import { NodeDataTypes } from '../components/react-flow/NodeTypes';

const project = new Project();
const sourceFile = project.createSourceFile('./build/compiled.ts');

const generateTypescript = (nodes: Node<NodeDataTypes>[]) => {
  for (const node of nodes) {
    switch (node.type) {
      case 'createVariable': {
        const data: any = node.data;
        sourceFile.addVariableStatement({
          declarationKind: VariableDeclarationKind.Const,
          declarations: [
            {
              name: data.name,
              initializer: data.expression,
            },
          ],
        });
        break;
      }
      case 'start':
      case 'end':
      default:
        break;
    }
  }

  sourceFile.formatText();
  console.log(sourceFile.getText());
};

export default generateTypescript;
