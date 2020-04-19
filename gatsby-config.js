require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});

const path = require('path');
const config = require('./src/config/SiteConfig').default;
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-manifest',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-lodash',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'post',
        path: `${__dirname}/blog`,

      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets/`,
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: config.GOOGLE_TAG_MANAGER_ID,
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': path.resolve(__dirname, 'src/'),
          '@components': path.resolve(__dirname, 'src/components/'),
          '@pages': path.resolve(__dirname, 'src/pages/'),
          '@templates': path.resolve(__dirname, 'src/templates/'),
          '@config': path.resolve(__dirname, 'src/config/'),
          '@models': path.resolve(__dirname, 'src/models/'),
          '@utils': path.resolve(__dirname, 'src/utils/'),
        },
        extensions: [
          'js', 'ts', 'tsx', 'jsx'
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        shortName: config.siteTitleAlt,
        description: config.siteDescription,
        startUrl: config.pathPrefix,
        backgroundColor: config.backgroundColor,
        themeColor: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        decks: [],
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: {
                tsx: 'tsx',
              },
              aliases: {},
            },
          },
        ],
      },
    },
  ]
};