import { css } from '@emotion/react';
import styled from '@emotion/styled';
import vector from '../../assets/vector.svg';

export const HeroHeader = styled.header`
  background: var(--clr-primary-10);
  height: 12rem;
  position: relative;
  z-index: -1;
  margin-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    background: url(${vector});
    background-size: cover;
  }

  @media screen and (min-width: 800px) {
    height: 16rem;
    margin-bottom: 6rem;
  }

  .hero-image {
    display: none !important;
    @media screen and (min-width: 800px) {
      display: block !important;
      position: absolute;
      bottom: 0;
      left: 60%;
      transform: translate(-20%, 20%);
      z-index: 4;
    }
  }

  .hero-home {
    width: 17rem;
    height: 15rem;
  }

  .hero-posts {
    width: 12rem;
    height: 13rem;
  }

  .hero-categories {
    width: 9rem;
    height: 12rem;
  }
`;

export const HeroImg = css``;
