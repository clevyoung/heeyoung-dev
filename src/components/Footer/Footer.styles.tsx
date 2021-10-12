import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  height: 7rem;
  display: grid;
  place-items: center;

  > div {
    width: 85vw;
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
  }

  p {
    margin-bottom: 0;
    letter-spacing: var(--spacing);
  }
`;
