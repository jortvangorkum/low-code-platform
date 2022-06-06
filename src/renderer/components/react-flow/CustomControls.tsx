import {
  ControlButton,
  Controls,
  useEdges,
  useNodes,
} from 'react-flow-renderer';
import { PlayArrow } from '@mui/icons-material';
import { NodeDataTypes } from './NodeTypes';
import axios from 'axios';

export default function CustomControls() {
  const nodes = useNodes<NodeDataTypes>();
  const edges = useEdges();

  return (
    <Controls>
      <ControlButton
        onClick={async () => {
          console.log(nodes);
          await axios.post('http://localhost:3001/code', {
            nodes,
            edges,
          });
        }}
      >
        <PlayArrow />
      </ControlButton>
    </Controls>
  );
}
