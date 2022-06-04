import ReactFlow, { Edge, MarkerType, Node, useEdgesState, useNodesState } from 'react-flow-renderer';
import { VariableTypes } from './components/react-flow/actions/CreateVariableAction';
import CustomControls from './components/react-flow/CustomControls';
import nodeTypes, { NodeDataTypes } from './components/react-flow/NodeTypes';

const initialNodes: Node<NodeDataTypes>[] = [
  {
    id: '1',
    type: 'start',
    data: { label: 'Start' },
    position: { x: 200, y: 100 },
  },

  {
    id: '2',
    type: 'createVariableAction',
    data: { label: 'Create Variable', name: 'x', expression: '1', type: VariableTypes.Number },
    position: { x: 350, y: 100 },
  },
  {
    id: '3',
    type: 'end',
    data: { label: 'End' },
    position: { x: 600, y: 100 },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed }, source: '1', target: '2' },
  { id: 'e2-3', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed }, source: '2', target: '3' },
];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div
      className='App'
      css={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
      >
        <CustomControls />
      </ReactFlow>
    </div>
  );
}

export default App;
