import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const NavbarWrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  background: transparent;
`;

export const NavCenter = styled.div`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 2rem;
    align-items: center;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled(Link)`
  display: block;
  height: 40px;
  span {
    font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: rgb(25, 25, 25);
  }
`;

export const ToggleBtn = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    color: var(--clr-primary-3);
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`;
