import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

interface Props {
  className: string;
}

const SocialLinks: React.VFC<Props> = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <a href='https://www.linkedin.com/in/clevyoung/'>
          <FontAwesomeIcon
            icon={faLinkedin}
            size='1x'
            style={{ color: '#0072b1' }}
          />
        </a>
      </li>
      <li>
        <a href='https://github.com/clevyoung'>
          <FontAwesomeIcon
            icon={faGithubSquare}
            size='1x'
            style={{ color: '#24292E' }}
          />
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;
