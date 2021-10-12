import styled from '@emotion/styled';

export const TopicsWrapper = styled.div`
  width: 85vw;
  max-width: var(--max-width);
  margin: 0 auto;
  order: 1;
  display: flex;
  flex-direction: column;
`;

export const TagsList = styled.div`
  display: grid;
  gap: 2rem;
  padding-bottom: 3rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  a {
    background: var(--clr-grey-10);
    border-radius: 0.2rem;
    text-align: center;
    color: var(--clr-grey-5);
    transition: var(--transition);
    text-transform: capitalize;
    padding: 0.75rem 0;
    span {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
`;
