import React from 'react';

import About from '../About';
import BannerTopics from '../BannerTopics';
import { Wrapper } from './Banner.styles';

interface Props {
  isAboutVisible?: boolean;
}

const Banner: React.VFC<Props> = ({ isAboutVisible }) => {
  return (
    <Wrapper>
      {isAboutVisible && <About />}
      <BannerTopics />
    </Wrapper>
  );
};

export default Banner;
