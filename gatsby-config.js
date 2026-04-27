const urljoin = require("url-join");
const config = require("./data/SiteConfig");

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    twitterUsername: config.twitterUsername,
    image: config.siteLogo,
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 90,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 768,
              withWebp: true,
              linkImagesToOriginal: false,
              backgroundColor: `transparent`,
              wrapperStyle: `left:0; width: 100%;`,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              additionalStyles: {
                ".gatsby-highlight": {
                  fontSize: "50px", // Set the desired font size
                },
              },
              // Customize Prism options here
              classPrefix: "language-", // Prefix for CSS classes added to code blocks
              inlineCodeMarker: "`", // Marker for inline code snippets
              showLineNumbers: true, // Whether to show line numbers
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
        ],
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: "gatsby-source-trello-board",
      options: {
        token: "",
        key: "",
        // https://trello.com/b/5QQGHuTt/gsoc-gsod-ideas
        board_id: "5c3aaac60b229715c199b69e",
      },
    },
    {
      resolve: "gatsby-source-trello-board",
      options: {
        token: "",
        key: "",
        // https://trello.com/b/wdOVNQgo/mentors
        board_id: "5eb7158715e9136e6a4ef285",
        include_custom_fields: true,
      },
    },
    {
      resolve: "source-terasology-modules",
      options: {
        accessToken: process.env.GITHUB_TOKEN,
      },
    },
    {
      resolve: "source-terasology-engine",
      options: {
        accessToken: process.env.GITHUB_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        description: config.siteDescription,
        start_url: `{${config.pathPrefix}/}`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: "/static/logos/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
};
