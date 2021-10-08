import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroImg, HeroHeader } from './Hero.styles';

interface Props {
  showPerson?: boolean;
}

const Hero: React.VFC<Props> = ({ showPerson }) => {
  return (
    <HeroHeader>
      {showPerson && (
        <StaticImage
          src='../../assets/noted.svg'
          alt='person typing'
          className='hero-person'
          placeholder='blurred'
          css={HeroImg}
        />
      )}
    </HeroHeader>
  );
};

export default Hero;
