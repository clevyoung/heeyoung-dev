import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { StyledNavLinks } from '../NavLinks/NavLinks.styles';
import { NavSocialLinks } from '../SocialLinks/SocialLinks.styles';

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
          <NavLogo to='/'>Hee Young</NavLogo>
          <ToggleBtn onClick={toggle}>
            <FontAwesomeIcon icon={faBars} size='1x' />
          </ToggleBtn>
        </NavHeader>
        <StyledNavLinks className='nav-links' />
        <NavSocialLinks className='nav-icons' />
      </NavCenter>
    </NavbarWrapper>
  );
};

export default Navbar;
