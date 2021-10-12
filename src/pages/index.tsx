import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Posts from '../components/Posts';

const IndexPage: React.VFC = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data;

  return (
    <Layout>
      <Hero
        showPerson
        image={
          <StaticImage
            src='../assets/noted.svg'
            alt='person typing'
            className='hero-image hero-home'
            placeholder='blurred'
          />
        }
      />

      <Posts posts={posts} title='recently published' isAboutVisible />
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        excerpt
        frontmatter {
          author
          category
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          readTime
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
