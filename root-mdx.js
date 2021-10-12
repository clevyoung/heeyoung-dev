import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Headings, Blockquote, Code, PrismSetup } from './src/components/Mdx';

const components = {
  h2: Headings.myH2,
  h3: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
};

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
