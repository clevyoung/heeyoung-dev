import styled from '@emotion/styled';

import SocialLinks from './SocialLinks';

export const NavSocialLinks = styled(SocialLinks)`
  display: none;

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterSocialLinks = styled(SocialLinks)`
  display: flex;
  justify-content: center;
  line-height: 1;
  margin-bottom: 0.5rem;

  a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: var(--transition);
  }

  li {
    transition: var(--transition);
  }

  li:hover {
    transform: translateY(-10%);
  }
`;

export const BannerSocialLinks = styled(SocialLinks)`
  display: flex;
  justify-content: center;

  a {
    font-size: 1.5rem;
    margin: 0 0.25rem;
  }

  li {
    transition: var(--transition);
  }

  li:hover {
    transform: translateY(-10%);
  }
`;
