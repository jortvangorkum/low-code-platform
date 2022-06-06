import { memo } from 'react';
import { Instance, NodeProps, useReactFlow } from 'react-flow-renderer';
import DefaultActionNode from '../DefaultActionNode';
import {
  ExpressionFieldStyle,
  TypeLabelStyle,
  ModalContainerStyle,
  TypeFieldStyle,
  NameLabelStyle,
  NameFieldStyle,
} from './style';

export enum VariableTypes {
  String = 'string',
  Number = 'number',
}

export interface CreateVariableData {
  expression: string;
  result: {
    type: VariableTypes;
    name: string;
  };
}

function updateNodeValues(
  setNodes: Instance.SetNodes<CreateVariableData>,
  id: string,
  data: CreateVariableData,
) {
  setNodes((nodes) =>
    nodes.map((node) => {
      if (node.id === id) {
        node.data = data;
      }
      return node;
    }),
  );
}

const CreateVariableModal = (
  setNodes: Instance.SetNodes<CreateVariableData>,
  nodeProps: NodeProps<CreateVariableData>,
) => (
  <div css={ModalContainerStyle}>
    <input
      css={ExpressionFieldStyle}
      type='text'
      id={`${nodeProps.id}.expression`}
      name='expression'
      defaultValue={nodeProps.data.expression}
    />
    <label css={TypeLabelStyle}>Type</label>
    <select
      css={TypeFieldStyle}
      id={`${nodeProps.id}.result.type`}
      name='result.type'
      defaultValue={nodeProps.data.result.type}
    >
      <option value='string'>String</option>
      <option value='number'>Number</option>
    </select>
    <label css={NameLabelStyle}>Name</label>
    <input
      css={NameFieldStyle}
      type='text'
      id={`${nodeProps.id}.result.name`}
      name='result.name'
      defaultValue={nodeProps.data.result.name}
    />
  </div>
);

const CreateVariableAction = memo(function CreateVariableAction(
  nodeProps: NodeProps<CreateVariableData>,
) {
  const { setNodes } = useReactFlow();

  return (
    <DefaultActionNode
      label='Create Variable'
      nodeProps={nodeProps}
      modalContents={CreateVariableModal(setNodes, nodeProps)}
      modalOkEvent={() => {
        updateNodeValues(setNodes, nodeProps.id, {
          expression: '1',
          result: { type: VariableTypes.Number, name: 'Test' },
        });
      }}
    />
  );
});

export default CreateVariableAction;
