import { css } from '@emotion/react';

export const ModalContainerStyle = css`
  width: 400px;
  height: 300px;

  background-color: grey;
  padding: 10px;
  outline: 0;

  /* Center Modal */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-columns: 1fr 50px;
  grid-template-rows: 1fr 20px;
`;

export const ModalContentsContainerStyle = css`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 1;
`;

export const DefaultActionContainerStyle = css`
  background-color: #42a5f5;
  padding: 14px;
  border-radius: 5px;
`;

export const TextCenterStyle = css`
  text-align: center;
`;

export const OkButtonStyle = css`
  width: 100%;
  grid-row: 2;
  grid-column: 2;
`;
