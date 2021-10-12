import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import { Wrapper } from './PostItem.styles';

interface Props {
  excerpt: string;
  frontmatter: any;
}

const Post: React.VFC<Props> = ({ excerpt, frontmatter }) => {
  const { title, image, slug, date, category, readTime } = frontmatter;

  return (
    <Wrapper>
      <Link to={`/posts/${slug}`}>
        <GatsbyImage image={getImage(image)} alt={title} className='img' />
      </Link>
      <div className='info'>
        <Link to={`/topic/${category}`}>
          <span className='category'>{category}</span>
        </Link>
        <h3 className='title'>
          <Link to={`/posts/${slug}`}>{title}</Link>
        </h3>
        <div className='underline'></div>
        <p>{excerpt}</p>
        <footer>
          <span className='date'>
            <FontAwesomeIcon icon={faClock} size='1x' className='icon' />
            {date}
          </span>
          <span>{readTime} min read</span>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Post;
