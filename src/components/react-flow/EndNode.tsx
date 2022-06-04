import { memo } from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";

export interface EndNodeData {
  label: string;
}

const EndNode = memo(function EndNode({ id, data }: NodeProps<EndNodeData>) {
  return (
    <div
      style={{
        backgroundColor: "#ef5350",
        padding: "14px",
        borderRadius: "50px",
      }}
    >
      <Handle 
        type="target"
        position={Position.Left}
        id={`${id}.target`}
      />
      <div id={id}>{data?.label}</div>
    </div>
  )
});

export default EndNode;