import { memo } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-renderer';

export enum VariableTypes {
  String = 'string',
  Number = 'number',
}

export interface CreateVariableData {
  label: string;
  name: string;
  expression: string;
  type: VariableTypes;
}

const CreateVariableAction = memo(function CreateVariableAction({
  id,
  data,
}: NodeProps<CreateVariableData>) {
  return (
    <div
      style={{
        backgroundColor: '#42a5f5',
        padding: '14px',
        borderRadius: 4,
      }}
    >
      <Handle type='target' position={Position.Left} id={`${id}.target`} />
      <div id={id}>{data.label}</div>
      <Handle type='source' position={Position.Right} id={`${id}.source`} />
    </div>
  );
});

export default CreateVariableAction;
