import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`;

const Topics = () => {
  const {
    allMdx: { distinct },
  } = useStaticQuery(query);

  return (
    <ul className='categories'>
      {distinct.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/topic/${category}`} className='category'>
              {category}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Topics;
