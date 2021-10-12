import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import TopicsList from '../components/TopicsList';

const TopicsPage: React.VFC = ({ data }) => {
  const {
    allMdx: { group },
  } = data;

  return (
    <Layout>
      <Hero
        showPerson
        image={
          <StaticImage
            src='../assets/content.svg'
            alt='person'
            className='hero-image hero-posts'
            placeholder='blurred'
          />
        }
      />
      <TopicsList topics={group} />
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx {
      group(field: frontmatter___category) {
        totalCount
        fieldValue
      }
    }
  }
`;

export default TopicsPage;
