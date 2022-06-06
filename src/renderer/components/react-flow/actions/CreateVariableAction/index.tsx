import { memo, useState } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-renderer';
import CreateVariableActionModal from './modal';
import { CreateVariableActionNodeStyle } from './style';

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

const CreateVariableAction = memo(function CreateVariableAction(
  nodeProps: NodeProps<CreateVariableData>,
) {
  const [open, setOpen] = useState(false);

  return (
    <div css={CreateVariableActionNodeStyle}>
      <div onClick={() => setOpen(true)}>
        <Handle
          type='target'
          position={Position.Left}
          id={`${nodeProps.id}.target`}
        />
        <div id={nodeProps.id}>Create Variable</div>
        <div id={`${nodeProps.id}.name`}>{nodeProps.data.result.name}</div>
        <div id={`${nodeProps.id}.type`}>{nodeProps.data.result.type}</div>
        <Handle
          type='source'
          position={Position.Right}
          id={`${nodeProps.id}.source`}
        />
      </div>
      <CreateVariableActionModal
        open={open}
        setOpen={setOpen}
        data={nodeProps.data}
        nodeId={nodeProps.id}
      />
    </div>
  );
});

export default CreateVariableAction;
