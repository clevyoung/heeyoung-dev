import styled from '@emotion/styled';

export const Wrapper = styled.aside`
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  row-gap: 1.5rem;
  @media (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fit, 200px);
      column-gap: 3rem;
    }
  }
`;
