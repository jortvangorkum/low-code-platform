import { ControlButton, Controls, useNodes } from 'react-flow-renderer';
import { PlayArrow } from '@mui/icons-material';
import { NodeDataTypes } from './NodeTypes';

export default function CustomControls() {
  return (
    <Controls>
      <ControlButton
        onClick={() => {
          const nodes = useNodes<NodeDataTypes>();
        }}
      >
        <PlayArrow />
      </ControlButton>
    </Controls>
  );
}
