# source-terasology-modules

Custom [Gatsby Source Plugin](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-source-plugin/) to fetch enriched information for [Terasology](https://github.com/Terasology) modules from GitHub.

## Install

This is a local plugin that is automatically loaded from the `plugins/` folder.

## Configuration

```js
// in gatsby-config.js

module.exports = {
  plugins: [
    //...
    {
      resolve: "source-terasology-modules",
      options: {
        accessToken: `<your GitHub access token>`
      }
    }
  ]
}
```

Use [Environment Variables](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/) to avoid exposing secrets.

## Usage

- `cover` is the URL to the custom banner image, if set
- `moduleTxt.tags` are derived from `is...` flags in the module's `module.txt`

```graphql
query Modules {
  allTerasologyModule(limit: 10) {
    nodes {
      name
      url
      description
      homepageUrl
      
      cover
      
      moduleTxt {
        id
        tags
        version
        displayName
        description
        dependencies {
          id
          optional
        }
      }
      
      readme {
        text
      }
    }
  }
}
```