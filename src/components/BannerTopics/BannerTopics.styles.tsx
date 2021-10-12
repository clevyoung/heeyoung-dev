import styled from '@emotion/styled';

export const Wrapper = styled.div`
  li {
    padding: 0.4rem 0 0.4rem 1rem;
    &:first-of-type {
      padding-top: 0;
    }
  }
  .category {
    font-size: 1rem;
    color: var(--clr-grey-5);
    text-transform: capitalize;
    display: block;

    letter-spacing: var(--spacing);
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .category:hover {
    background: var(--clr-grey-10);
  }
`;
