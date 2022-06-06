import { css } from '@emotion/react';

export const ModalContainerStyle = css`
  height: 100%;
  width: 100%;

  /* Add Grid */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;

export const ExpressionFieldStyle = css`
  grid-row-start: 1;
  grid-row-end: 7;
  grid-column-start: 1;
  grid-column-end: 10;
`;

export const TypeLabelStyle = css`
  padding-left: 10px;
  grid-row-start: 7;
  grid-row-end: 8;
  grid-column-start: 1;
  grid-column-end: 2;
`;

export const TypeFieldStyle = css`
  grid-row-start: 7;
  grid-row-end: 8;
  grid-column-start: 2;
  grid-column-end: 10;
`;

export const NameLabelStyle = css`
  padding-left: 10px;
  grid-row-start: 8;
  grid-row-end: 9;
  grid-column-start: 1;
  grid-column-end: 2;
`;

export const NameFieldStyle = css`
  grid-row-start: 8;
  grid-row-end: 9;
  grid-column-start: 2;
  grid-column-end: 10;
`;
