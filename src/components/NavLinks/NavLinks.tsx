import React from 'react';

import { PageLink } from './NavLinks.styles';

interface Props {
  className: string;
}

const ActiveLinks: React.FC<Props> = ({ children, className }) => {
  return (
    <ul className={className}>
      <li>
        <PageLink to='/'>Home</PageLink>
      </li>
      <li>
        <PageLink to='/posts'>Posts</PageLink>
      </li>
      <li>
        <PageLink to='/topics'>Topics</PageLink>
        {children}
      </li>
    </ul>
  );
};

export default ActiveLinks;
