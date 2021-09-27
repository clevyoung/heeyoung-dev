module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "heeyoung-dev",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
