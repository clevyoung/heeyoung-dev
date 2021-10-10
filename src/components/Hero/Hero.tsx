import React, { ReactElement } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroImg, HeroHeader } from './Hero.styles';

interface Props {
  showPerson?: boolean;
  image?: ReactElement;
}

const Hero: React.VFC<Props> = ({ showPerson, image }) => {
  return <HeroHeader>{showPerson && image}</HeroHeader>;
};

export default Hero;
