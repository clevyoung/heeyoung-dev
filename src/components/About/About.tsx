import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import BannerTitle from '../BannerTitle';
import { Wrapper } from './About.styles';
import { BannerSocialLinks } from '../SocialLinks/SocialLinks.styles';

const About: React.VFC = () => {
  return (
    <Wrapper>
      <BannerTitle title='about me' />
      <StaticImage
        src='../../assets/me.jpeg'
        layout='fixed'
        width={100}
        height={100}
        alt='author'
        className='img'
      />
      <p>Front End Engineer</p>
      <BannerSocialLinks className='banner-icons' />
    </Wrapper>
  );
};

export default About;
