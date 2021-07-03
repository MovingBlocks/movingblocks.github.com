# ModuleSite Deployment

[ModuleSite](https://github.com/MovingBlocks/ModuleSite) uses a [Github Action](https://github.com/features/actions) to automate the deployment process. On every push to `master`, the GitHub action is triggered, builds the ModuleSite and deploys it on
[GitHub pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

## Requirements

**[Gatsby Publish](https://github.com/marketplace/actions/gatsby-publish):** Github Action to build and deploy Gatsby site on Github pages.

## Working

Everytime the GitHub action is triggered, it executes `gatsby build` at the root of the repository and deploys it to GitHub pages.
You can find our Github action workflow in `.github\workflow`

For using the GitHub action, Gatsby Publish provides some configuration options:

- **access-token:**
  A GitHub Personal Access Token with access for pushing and creating pull requests. This is required to push builds after building the Site. The access token should be stored as a secret in the repository settings.

- **deploy-branch:**
  This is the branch to which all the outputs after executing `gatsby build` will be pushed. This includes static files that were generated during build process.

- **gatsby-args:**
  Additional arguments that get passed to `gatsby build`. See the [Gatsby documentation](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/) for a list of allowed options. Provided as an input. Defaults to nothing.

The above configuration options are used by the ModuleSite. For more information about the configuration visit [Gatsby Publish](https://github.com/marketplace/actions/gatsby-publish).

> **⚠️ NOTE:** The Gatsby code is located in the root directory. After the build process the `./public` directory is generated. Gatsby does not allow to edit or customize the public directory, so we have to build code every time the Gatsby code changes. Gatsby automatically provides a build script on `Package.json` which is required by the GitHub action to execute the build process.
