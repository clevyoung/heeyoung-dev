import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { StyledNavLinks } from '../NavLinks/NavLinks.styles';

import {
  NavbarWrapper,
  NavCenter,
  NavHeader,
  NavLogo,
  ToggleBtn,
} from './Navbar.styles';

interface Props {
  toggle: () => void;
}

const Navbar: React.VFC<Props> = ({ toggle }) => {
  return (
    <NavbarWrapper>
      <NavCenter>
        <NavHeader>
          <NavLogo to='/'>
            <span>Clevyoung</span>
          </NavLogo>
          <ToggleBtn onClick={toggle}>
            <FontAwesomeIcon icon={faBars} size='1x' />
          </ToggleBtn>
        </NavHeader>
        <StyledNavLinks className='nav-links' />
        {/* 여기는 다국어 자리 */}
      </NavCenter>
    </NavbarWrapper>
  );
};

export default Navbar;
