import React from 'react';
import styled from 'styled-components';
import { p, pb, pl, pr, pt, px, py } from './core';

const StyledPadding = styled.div`
  ${({ inline }) => inline && 'display: inline-block !important;'}
  ${({ all }) => p(all)}
  ${({ horizontal }) => px(horizontal)}
  ${({ vertical }) => py(vertical)}
  ${({ top }) => pt(top)}
  ${({ right }) => pr(right)}
  ${({ bottom }) => pb(bottom)}
  ${({ left }) => pl(left)}
`;

/**
 * @typedef {import('./core').ViewportProps} ViewportProps
 */

/**
 * @typedef {import('./core').CoreSizes} PaddingSize
 */

/**
 * @typedef {object} PaddingProps Padding Component Properties
 * @prop {boolean} [inline] Display the container with inline-block
 * @prop {ViewportProps|PaddingSize} [all] Padding on all sides
 * @prop {ViewportProps|PaddingSize} [vertical] Top and Bottom padding
 * @prop {ViewportProps|PaddingSize} [horizontal] Left and Right padding
 * @prop {ViewportProps|PaddingSize} [top] Top padding
 * @prop {ViewportProps|PaddingSize} [bottom] Bottom padding
 * @prop {ViewportProps|PaddingSize} [left] Left padding
 * @prop {ViewportProps|PaddingSize} [right] Right padding
 */

/**
 * A container with configurable responsive padding
 * @type {React.FC<PaddingProps>}
 * @param {PaddingProps} props
 * @returns
 */
const Padding = props => <StyledPadding {...props} />;

export { Padding };
