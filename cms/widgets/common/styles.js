/* eslint-disable @upgrade/require-palette-colors */
import styled, { css } from 'styled-components';

export const ControlWrapper = styled.div`
  & + & {
    margin-top: 14px;
  }
`;

const inputStyles = css`
  display: block;
  width: 100%;
  box-shadow: none;
  background-color: rgb(255, 255, 255);
  color: rgb(68, 74, 87);
  position: relative;
  font-size: 15px;
  line-height: 1.5;
  padding: 16px 20px;
  margin: 0px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(223, 223, 227);
  border-image: initial;
  border-radius: 0px 5px 5px;
  outline: 0px;
  transition: border-color 0.2s ease 0s;
  &:focus,
  &:active {
    border-color: rgb(58, 105, 199);
  }
`;

export const Input = styled.input`
  ${inputStyles};
`;

export const TextArea = styled.textarea`
  ${inputStyles};
`;

export const Label = styled.label`
  color: rgb(122, 130, 145);
  background-color: rgb(223, 223, 227);
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 3px 3px 0px 0px;
  padding: 3px 6px 2px;
  margin: 0px;
  transition: all 0.2s ease 0s;
  &:focus,
  &:active {
    background-color: rgb(58, 105, 199);
  }
`;
