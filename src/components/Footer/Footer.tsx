import React from 'react';
import { FooterSocialLinks } from '../SocialLinks/SocialLinks.styles';

import { FooterWrapper } from './Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <FooterSocialLinks className='footer-icons' />
        <p>&copy;{new Date().getFullYear()} Hee Young. All Rights Reserved</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
