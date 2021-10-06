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
        {children}
      </li>
      <li>
        <PageLink to='/categories'>Topics</PageLink>
      </li>
    </ul>
  );
};

export default ActiveLinks;
