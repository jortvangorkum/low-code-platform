import { ControlButton, Controls } from "react-flow-renderer";
import { PlayArrow } from '@mui/icons-material';

export default function CustomControls() {
  return (
    <Controls>
      <ControlButton onClick={() => console.log('action')}>
        <PlayArrow />
      </ControlButton>
    </Controls>
  )
}