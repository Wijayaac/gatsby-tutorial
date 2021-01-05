/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby first tutorial',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quasi.',
    author: '@John Doe',
    data: ['item 1', 'item 2'],
    person: {
      name: 'Wijaya',
      age: 21,
    }
  },
  plugins: [`gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
