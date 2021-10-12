import React from 'react';
import { Wrapper } from './BannerTitle.styles';

interface Props {
  title: string;
}

const BannerTitle: React.VFC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <div className='line'></div>
    </Wrapper>
  );
};

export default BannerTitle;
