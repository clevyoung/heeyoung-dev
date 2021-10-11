import React from 'react';
import { FooterSocialLinks } from '../SocialLinks/SocialLinks.styles';

import { FooterWrapper } from './Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <p>All Rights Reserved &copy;Clevyoung {new Date().getFullYear()} </p>
        <FooterSocialLinks className='footer-icons' />
      </div>
    </FooterWrapper>
  );
};

export default Footer;
