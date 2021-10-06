import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

interface Props {
  className: string;
}

const SocialLinks: React.VFC<Props> = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <a href='https://twitter.com'>
          <FontAwesomeIcon icon={faLinkedin} size='1x' />
        </a>
      </li>
      <li>
        <a href='https://twitter.com'>
          <FontAwesomeIcon icon={faGithubSquare} size='1x' />
        </a>
      </li>
      <li>
        <a href='https://twitter.com'>
          <FontAwesomeIcon icon={faFacebookSquare} size='1x' />
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;
