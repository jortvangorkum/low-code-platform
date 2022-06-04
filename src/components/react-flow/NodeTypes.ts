import StartNode, { StartNodeData } from "./StartNode";
import SelectActionNode, { SelectActionNodeData } from "./SelectActionNode";
import EndNode, { EndNodeData } from "./EndNode";
import CreateVariableAction, { CreateVariableData } from "./actions/CreateVariableAction";

export type NodeDataTypes = CreateVariableData | StartNodeData | SelectActionNodeData | EndNodeData;

const nodeTypes = {
  createVariableAction: CreateVariableAction,
  selectAction: SelectActionNode,
  start: StartNode,
  end: EndNode,
}

export default nodeTypes;