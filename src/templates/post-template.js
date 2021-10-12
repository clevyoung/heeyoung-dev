import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import Hero from '../components/Hero';

const PostTemplate = ({ data }) => {
  console.log(data);
  const {
    mdx: {
      frontmatter: { title, category, image, date, embeddedImages },
      body,
    },
  } = data;

  return (
    <Layout>
      <Hero />
      <Wrapper>
        <article>
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className='main-img'
          />
          <div className='post-info'>
            <span>{category}</span>
            <h2>{title}</h2>
            <p>{date}</p>
            <div className='underline'></div>
          </div>
          <MDXRenderer embeddedImages={embeddedImages}>{body}</MDXRenderer>
        </article>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
        readTime
        slug
        embeddedImages {
          childImageSharp {
            gatsbyImageData
          }
        }
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

const Wrapper = styled.section`
  width: 85vw;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 4rem;

  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
`;

export default PostTemplate;
