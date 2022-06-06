import { memo } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-renderer';

export enum ActionType {
  CreateVariable,
}

export interface SelectActionNodeData {
  action: ActionType;
  label: string;
}

const SelectActionNode = memo(function SelectActionNode({
  id,
  data,
}: NodeProps<SelectActionNodeData>) {
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

export default SelectActionNode;
