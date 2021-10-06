import styled from '@emotion/styled';
import { Link } from 'gatsby';
import ActiveLinks from './NavLinks';

export const PageLink = styled(Link)`
  margin-right: 1rem;
  color: var(--clr-black);
  font-weight: 500;
  letter-spacing: var(--spacing);
  font-size: 1rem;
  transition: var(--transition);
  font-family: var(--ff-secondary);
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
`;

export const StyledNavLinks = styled(ActiveLinks)`
  display: none;

  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
  }

  ${PageLink} {
    &:hover {
      background: var(--clr-primary-5);
      color: var(--clr-primary-10);
    }
  }
`;

export const StyledSidebarLinks = styled(ActiveLinks)`
  li {
    margin-bottom: 1.5rem;
  }

  ${PageLink} {
    font-size: 2rem;
    display: block;
    color: var(--clr-grey-1);
    font-weight: 700;
  }
`;
