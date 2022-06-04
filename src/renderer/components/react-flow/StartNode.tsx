import { memo } from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";

export interface StartNodeData {
  label: string;
}

const StartNode = memo(function StartNode({ id, data }: NodeProps<StartNodeData>) {
  return (
    <div
      style={{
        backgroundColor: "#4caf50",
        padding: "14px",
        borderRadius: "50px",
      }}
    >
      <div id={id}>{data?.label}</div>
      <Handle 
        type="source"
        position={Position.Right}
        id={`${id}.source`}
      />
    </div>
  )
});

export default StartNode;