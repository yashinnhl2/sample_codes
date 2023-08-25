import React from 'react';
import styled from 'styled-components';
import { m, mb, ml, mr, mt, mx, my } from './core';

const MarginStyle = styled.div`
  ${({ inline }) => inline && 'display: inline-block !important;'}
  ${({ all }) => m(all)}
  ${({ horizontal }) => mx(horizontal)}
  ${({ vertical }) => my(vertical)}
  ${({ top }) => mt(top)}
  ${({ right }) => mr(right)}
  ${({ bottom }) => mb(bottom)}
  ${({ left }) => ml(left)}
`;

/**
 * @typedef {import('./core').ViewportProps} ViewportProps
 */

/**
 * @typedef {import('./core').CoreSizes} MarginSize
 */

/**
 * @typedef {object} MarginProps Margin Component Properties
 * @prop {boolean} [inline] Display the container with inline-block
 * @prop {ViewportProps|MarginSize} [all] Margin on all sides
 * @prop {ViewportProps|MarginSize} [vertical] Top and Bottom margin
 * @prop {ViewportProps|MarginSize} [horizontal] Left and Right margin
 * @prop {ViewportProps|MarginSize} [top] Top margin
 * @prop {ViewportProps|MarginSize} [bottom] Bottom margin
 * @prop {ViewportProps|MarginSize} [left] Left margin
 * @prop {ViewportProps|MarginSize} [right] Right margin
 */

/**
 * A container with configurable responsive margins
 * @type {React.FC<MarginProps>}
 * @param {MarginProps} props
 * @returns
 */
const Margin = props => <MarginStyle {...props} />;

export { Margin };
