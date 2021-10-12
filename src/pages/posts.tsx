import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { graphql } from 'gatsby';
import Posts from '../components/Posts';
import { StaticImage } from 'gatsby-plugin-image';

const PostsPage: React.VFC = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data;

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
      <Posts posts={posts} title='all posts' />
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

export default PostsPage;
