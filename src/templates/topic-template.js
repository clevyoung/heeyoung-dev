import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Posts from '../components/Posts';

const TopicTemplate = (props) => {
  const {
    data: {
      categories: { nodes: posts },
    },
  } = props;

  const {
    pageContext: { category },
  } = props;

  return (
    <Layout>
      <Hero
        showPerson
        image={
          <StaticImage
            src='../assets/articles.svg'
            alt='person'
            className='hero-image hero-posts'
            placeholder='blurred'
          />
        }
      />
      <Posts posts={posts} title={`topic / ${category}`} />
    </Layout>
  );
};

export const query = graphql`
  query GetCategories($category: String) {
    categories: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM, Do YYYY")
          slug
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;

export default TopicTemplate;
