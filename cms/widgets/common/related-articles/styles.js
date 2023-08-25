/* eslint-disable @upgrade/require-palette-colors */
import styled from 'styled-components';

const color = 'rgb(223, 223, 227)';

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

export const StyledRow = styled.div`
  padding: 0.5rem;
  width: 100%;
  margin: 0.2rem;
  display: flex;

  button {
    color: red;
    margin-left: 1rem;
  }
`;
