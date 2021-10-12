import styled from '@emotion/styled';

export const PostsWrapper = styled.section`
  width: 85vw;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 4rem;

  @media screen and (min-width: 992px) {
    width: 92vw;
  }
`;

export const PostsTitle = styled.h3`
  font-weight: 700;
  text-transform: uppercase;
  // color: #e12d39;
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
`;

export const PostsCenter = styled.div`
  @media screen and (min-width: 1170px) {
    display: grid;
    grid-template-columns: 1fr 250px;
    column-gap: 1rem;
  }
`;
