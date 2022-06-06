import { Injectable } from '@nestjs/common';
import { Project, SourceFile, VariableDeclarationKind } from 'ts-morph';
import EdgeDto from '../dto/edge.dto';
import NodeDto from '../dto/node.dto';

type NodeDtos = NodeDto[];
type EdgeDtos = EdgeDto[];

interface GenerateCodeInfo {
  nodes: NodeDtos;
  edges: EdgeDtos;
}

interface Tree {
  node: NodeDto;
  children: Tree[];
}

@Injectable()
export class CodeGenerationService {
  findStartNode(nodes: NodeDtos): NodeDto {
    const startNodes = nodes.filter((x) => x.type === 'start');
    if (startNodes.length != 1) {
      throw Error('Incorrect amount of start nodes');
    }
    return startNodes[0];
  }

  findSourceEdges(node: NodeDto, edges: EdgeDtos): EdgeDtos {
    return edges.filter((x) => x.source === node.id);
  }

  findChildrenNodes(edges: EdgeDtos, nodes: NodeDtos): NodeDtos {
    return edges.flatMap((edge) =>
      nodes.filter((node) => node.id === edge.target),
    );
  }

  buildTree(curNode: NodeDto, nodes: NodeDtos, edges: EdgeDtos): Tree {
    if (curNode.type === 'end') {
      return {
        node: curNode,
        children: [],
      };
    }
    const sourceEdges = this.findSourceEdges(curNode, edges);
    const childrenNodes = this.findChildrenNodes(sourceEdges, nodes);
    const children = childrenNodes.map((child) =>
      this.buildTree(child, nodes, edges),
    );
    return {
      node: curNode,
      children,
    };
  }

  getTree(nodes: NodeDtos, edges: EdgeDtos): Tree {
    const startNode = this.findStartNode(nodes);
    return this.buildTree(startNode, nodes, edges);
  }

  convertStartNodeToCode(
    sourceFile: SourceFile,
    node: NodeDto,
    children: Tree[],
  ): void {
    console.debug('Converting Start Node');
    if (children.length != 1) {
      throw Error('Start Node needs a single outgoing edge');
    }

    children.forEach((child) => this.convertTreeToCode(sourceFile, child));
  }

  convertCreateVariableToCode(
    sourceFile: SourceFile,
    node: NodeDto,
    children: Tree[],
  ): void {
    console.debug('Converting Create Variable Node');
    if (children.length != 1) {
      throw Error('Create Variable needs a single outgoing edge');
    }

    console.log(node.data);

    sourceFile.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: node.data.name,
          type: node.data.type,
          initializer: node.data.expression,
        },
      ],
    });

    children.forEach((child) => this.convertTreeToCode(sourceFile, child));
  }

  convertTreeToCode(sourceFile: SourceFile, tree: Tree): void {
    const { node, children } = tree;

    switch (node.type) {
      case 'start':
        this.convertStartNodeToCode(sourceFile, node, children);
        break;
      case 'createVariableAction':
        this.convertCreateVariableToCode(sourceFile, node, children);
        break;
      case 'end':
        break;
      default:
        throw Error('Unimplemented action');
    }
  }

  generateCode({ nodes, edges }: GenerateCodeInfo): string {
    const project = new Project();
    const sourceFile = project.createSourceFile('./build/compiled.ts');

    const tree = this.getTree(nodes, edges);
    console.log(JSON.stringify(tree));
    this.convertTreeToCode(sourceFile, tree);

    sourceFile.formatText();
    return sourceFile.getText();
  }
}
