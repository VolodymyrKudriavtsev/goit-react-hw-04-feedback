import styled from '@emotion/styled';

export const Block = styled.section`
  padding: 10px;
  border: 3px solid #87cefa;
  border-radius: 7px;

  & h2 {
    margin: 0 0 20px;
    font-size: 27px;
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
