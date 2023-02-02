import styled from '@emotion/styled';

export const Button = styled.button`
  width: 90px;
  padding: 10px;
  border: 2px solid #87cefa;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 5px;
  cursor: pointer;

  &::first-letter {
    text-transform: uppercase;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: white;
    background-color: #87cefa;
  }

  &:active {
    box-shadow: none;
  }
`;
