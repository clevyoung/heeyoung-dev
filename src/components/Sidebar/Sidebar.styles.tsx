import styled from '@emotion/styled';
import Topics from '../Topics';

type SidebarProps = {
  isOpen: boolean;
};

export const SidebarWrapper = styled.aside<SidebarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--clr-grey-10);
  transition: var(--transition);
  display: grid;
  align-items: center;
  padding-left: 2rem;
  z-index: 999;
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  .categories {
    flex-direction: column;
    margin: 1rem 0;
  }

  .category {
    color: var(--clr-grey-5);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: capitalize;
    padding-left: 1.5rem;
    display: block;
    cursor: pointer;
  }
`;

export const SidebarCloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: transparent;
  font-size: 3rem;
  cursor: pointer;
`;
