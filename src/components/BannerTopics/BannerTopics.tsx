import React from 'react';

import Topics from '../Topics';
import BannerTitle from '../BannerTitle';
import { Wrapper } from './BannerTopics.styles';

const BannerTopics = () => {
  return (
    <Wrapper>
      <BannerTitle title='topics' />
      <Topics />
    </Wrapper>
  );
};

export default BannerTopics;
