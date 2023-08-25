/* eslint-disable @upgrade/require-palette-colors */
import styled from 'styled-components';

const color = 'rgb(223, 223, 227)';

export const Select = styled.div`
  position: absolute;
  width: 94.5%;
  max-height: 10rem;
  overflow: auto;
  z-index: 999;
  box-shadow: 0 5px 12px #dedede;
  background: #fff;
  border-radius: 0 0 4px 4px;
`;

export const SelectItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Container = styled.div`
  position: relative;
  height: max-content;
  border: 2px solid ${color};
  border-radius: 0px 5px 5px;
  padding: 16px 20px;

  input {
    width: 100%;
    height: 2rem;
    padding: 0.2rem;
    border: 1px solid ${color};
  }
`;

export const StyledTag = styled.div`
  background-color: #ddd;
  padding: 0.5rem;
  display: inline-flex;
  margin: 0.2rem;

  button {
    color: red;
    margin-left: 1rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
`;
