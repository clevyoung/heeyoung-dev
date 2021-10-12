import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { StyledSidebarLinks } from '../NavLinks/NavLinks.styles';
import { SidebarWrapper, SidebarCloseBtn } from './Sidebar.styles';
import Topics from '../Topics';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.VFC<Props> = ({ isOpen, toggle }) => {
  return (
    <SidebarWrapper isOpen={isOpen}>
      <SidebarCloseBtn onClick={toggle}>
        <FontAwesomeIcon icon={faTimes} size='1x' />
      </SidebarCloseBtn>
      <div className='sidebar-container'>
        <StyledSidebarLinks className='sidebar-links'>
          <Topics />
        </StyledSidebarLinks>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
