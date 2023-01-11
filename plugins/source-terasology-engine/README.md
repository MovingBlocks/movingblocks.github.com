# source-terasology-engnie

Custom [Gatsby Source Plugin](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-source-plugin/) to fetch enriched information for the [Terasology Engine](https://github.com/MovingBlocks/Terasology) from GitHub.

## Install

This is a local plugin that is automatically loaded from the `plugins/` folder.

## Configuration

```js
// in gatsby-config.js

module.exports = {
  plugins: [
    //...
    {
      resolve: "source-terasology-engine",
      options: {
        accessToken: `<your GitHub access token>`
      }
    }
  ]
}
```

Use [Environment Variables](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/) to avoid exposing secrets.

## Usage

```graphql
query Engine {
  allTerasologyEngine {
    issues{
      nodes {
        id
        title
        author {
          login
        }
        labels {
          nodes {
            name
          }
        }
        updatedAt
        url
      }
    }
  }
}
```
