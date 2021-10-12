import { css } from '@emotion/react';

export const styles = css`
  :root {
    /* dark shades of primary color*/

    --clr-primary-1: hsl(245, 91%, 17%);
    --clr-primary-2: hsl(245, 84%, 25%);
    --clr-primary-3: hsl(245, 81%, 29%);
    --clr-primary-4: hsl(245, 77%, 34%);
    --clr-primary-5: hsl(245, 62%, 45%);
    /* lighter shades of primary color */
    --clr-primary-6: hsl(245, 57%, 50%);
    --clr-primary-7: hsl(245, 65%, 59%);
    --clr-primary-8: hsl(245, 80%, 74%);
    --clr-primary-9: hsl(245, 94%, 87%);
    --clr-primary-10: hsl(245, 87%, 94%);
    /* darkest grey - used for headings */
    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);
    /* grey used for paragraphs */
    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: hsl(206, 33%, 96%);
    --clr-green-dark: hsl(125, 67%, 35%);
    --clr-green-light: hsl(134, 41%, 88%);
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-white: #fff;
    --clr-black: #0a0c10;
    --ff-primary: 'Roboto', sans-serif;
    --ff-secondary: 'Open Sans', sans-serif;
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 700px;
  }
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--clr-white);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
  }

  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-family: var(--ff-primary);
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 0.875rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-3);
  }

  main {
    margin-top: -5rem;
    min-height: calc(100vh - 7rem);
  }

  @media screen and (min-width: 800px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.65rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }

  .code {
    background: #1e1e1e;
    color: var(--clr-primary-5);
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
    margin: 2rem 0;
    font-size: 1.2rem;
    overflow-x: scroll;
    position: relative;
  }
  .code pre {
    font-family: 'Courier New', Courier, monospace;
  }
  .code .token-line {
    line-height: 1.5;
  }

  .nice-text {
    background: var(--clr-primary-10);
    padding: 2rem 1.5rem;
    color: var(--clr-grey-1);
    border-radius: var(--radius);
    border-left: 3px solid var(--clr-primary-5);
    color: var(--clr-black);
    position: relative;
  }
  .nice-text h4,
  .nice-text p {
    color: var(--clr-black);
  }
  .nice-text p {
    margin-bottom: 0;
  }
  @media screen and (min-width: 992px) {
    .nice-text {
      margin-left: -2rem;
      margin-right: -2rem;
    }
  }
  .nice-text-icon {
    position: absolute;
    top: 0;
    left: -3px;
    background: var(--clr-white);
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6px solid var(--clr-white);
    color: var(--clr-primary-5);
  }
  .mdx-page {
    width: 90vw;
    max-width: var(--fixed-width);
    margin: 4rem auto;
  }
  .mdx-img p {
    width: 20rem;
  }
  .mdx-img .gatsby-resp-image-image,
  .mdx-img .gatsby-resp-image-background-image {
    border-radius: 50px;
    height: 20rem;
    object-fit: cover;
  }

  .first-inline-img {
    width: 20rem;
    border-radius: 1rem;
  }
`;
