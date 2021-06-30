# ModuleSite Deployment

[ModuleSite](https://github.com/MovingBlocks/ModuleSite) uses a [Github Action](https://github.com/features/actions) to automate the deployment process. On every push to `master`, the GitHub action is triggered, builds the ModuleSite and deploys it on
[GitHub pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

## Requirements

**[Gatsby Publish](https://github.com/marketplace/actions/gatsby-publish):** Github Action to build and deploy Gatsby site on Github pages.

## Working

Everytime the GitHub action is triggered, it executes `gatsby build` at the root of the repository and deploys it to GitHub pages.
You can find our Github action workflow in `.github\workflow`

Before using Action their are some configuration options that are provide by Gatsby Publish

- **access-token:**
  A GitHub Personal Access Token with access of pushing and creating pull request.This is require to push builds after building the Site.The access token should be stored as secret text in the repository settings

- **deploy-branch:**
  This will be branch where all the outputs after executing `gatsby build` will be push. This includes static files that were generated duing build process

- **gatsby-args:**
  Additional arguments that get passed to gatsby build. See the [Gatsby documentation](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/) for a list of allowed options. Provided as an input. Defaults to nothing.

The above configuration options were used by ModuleSite.For more information about configuration visit Gatsby Publish

> **⚠️ NOTE:** The Gatsby code is on root directory so after build process `./public` directory is generated.Gatsby do not allow to edit or customize the public directory, so we have to build code everytime when their is any changes to Gatsby code.Gatsby automatically provides a build script on `Package.json` which is required by the Action to execute the build process
