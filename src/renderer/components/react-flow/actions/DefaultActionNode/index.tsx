import { memo, MouseEventHandler, useState } from 'react';
import { Handle, NodeProps, Position } from 'react-flow-renderer';
import {
  DefaultActionContainerStyle,
  ModalContainerStyle,
  ModalContentsContainerStyle,
  OkButtonStyle,
  TextCenterStyle,
} from './style';
import { Modal } from '@mui/material';

interface DefaultNodeData {
  result?: {
    type: string;
    name: string;
  };
}

interface DefaultNodeInterface<T> {
  label: string;
  nodeProps: NodeProps<DefaultNodeData & T>;
  modalContents: JSX.Element;
  modalOkEvent: MouseEventHandler<HTMLButtonElement>;
}

function DefaultActionNode<T>({
  label,
  nodeProps,
  modalContents,
  modalOkEvent,
}: DefaultNodeInterface<T>) {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    console.log(openModal);
    setOpenModal(!openModal);
  }

  function closeModal() {
    setOpenModal(false);
  }

  const DefaultActionModal = () => (
    <Modal open={openModal} onClose={closeModal}>
      <div css={ModalContainerStyle}>
        <div css={ModalContentsContainerStyle}>{modalContents}</div>
        <button
          css={OkButtonStyle}
          onClick={(event) => {
            modalOkEvent(event);
            closeModal();
          }}
        >
          Ok
        </button>
      </div>
    </Modal>
  );

  const DefaultActionNode = () => (
    <div css={DefaultActionContainerStyle} onClick={handleOpenModal}>
      <Handle
        type='target'
        position={Position.Left}
        id={`${nodeProps.id}.target`}
      />
      {nodeProps.data.result ? (
        <>
          <div id={nodeProps.id}>{label}</div>
          <div id={`${nodeProps.id}.name`} css={TextCenterStyle}>
            {nodeProps.data.result.name}
          </div>
          <div id={`${nodeProps.id}.type`} css={TextCenterStyle}>
            {nodeProps.data.result.type}
          </div>
        </>
      ) : (
        <div id={nodeProps.id}>{label}</div>
      )}
      <Handle
        type='source'
        position={Position.Right}
        id={`${nodeProps.id}.source`}
      />
    </div>
  );

  return (
    <div>
      <DefaultActionNode />
      <DefaultActionModal />
    </div>
  );
}

const DefaultActionNodeMemo = memo(
  DefaultActionNode,
) as typeof DefaultActionNode;

export default DefaultActionNodeMemo;
