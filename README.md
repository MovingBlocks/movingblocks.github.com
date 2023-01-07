<h1 align="center">Module Showcase Website</h1>

<h5 align="center">Keeping track of Terasology's modules since 2019.</h5>

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/MovingBlocks/ModuleSite) 
[![status](https://img.shields.io/badge/status-pre--alpha-red.svg)](https://github.com/MovingBlocks/ModuleSite)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/MovingBlocks/ModuleSite.svg)](https://github.com/MovingBlocks/ModuleSite/issues/)

---

<p align="center">
  <a href="#about">About</a>&nbsp;&nbsp;
  <a href="#setup">Setup</a>&nbsp;&nbsp;
  <a href="#contributing">Contributing</a>
</p>

---

<h2 id="about">About The Project</h2>

Terasology’s basic engine can be extended by a huge amount (201 right now!) of modules. Keeping track of them is not the easiest task. This is why this gatsby framework provides an automated generator for a website, listing all of them. This showcase website will increase discoverability by allowing to filter and search for modules by keywords and categories.

---

<h2> Getting Started </h2>

The module website development environment can be installed on macOS, Windows, and Linux (Debian or Ubuntu recommended). You’ll need at least 1GB of available RAM.

---

## Prerequisites

This website is built with [Gatsby](https://www.gatsbyjs.org/).
The following tools must be installed to build and serve the website locally:

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)

---

## Development

Make sure that you fulfill the [prerequisites](#prerequisites) for building the website locally

To install all dependencies, run

```sh
yarn install
```

You can then use the [Gatsby CLI commands](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) `build`, `clean`, `develop` and `serve`.

Our custom source plugin fetches information from GitHub, and therefore needs a GitHub [personal access token] in the environment named `GITHUB_TOKEN`. 

[personal access token]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

If the token expires, you can follow the ["How to fix an expired GitHub Action token"](https://github.com/MovingBlocks/Terasology/wiki/Maintenance#how-to-fix-an-expired-github-action-token) instructions with the following adjustments:
* the token required for the custom source plugin does not require additional scopes, which means you can skip step 2
* steps 4 and 5 should be performed in the [ModuleSite repository settings](https://github.com/MovingBlocks/ModuleSite/settings/secrets/actions) on the `MODULE_FETCH_GITHUB_TOKEN` secret

To build the website, run

```sh
yarn run build
```

To serve the website from a previous build, run 

```sh
yarn run serve
``` 

To compile and serve a preview of the website that reflects your source code changes in the browser in real time, run

```sh
yarn run develop
```

To clean up built assets and caches, run 

```sh
yarn run clean
```

---

> To learn more about the project structure and working of the project please refer to our [docs](docs/project-structure.md).

<h2 id="contributing">Contributing</h2>

To add a new feature or fix a bug follow the steps - 

- Make sure your local workspace is up-to-date with the main repository.
    - Fetch the latest code `git fetch upstream`
    - Checkout to your local master branch `git checkout master`
    - Merge changes from `upstream/master` to sync `git merge upstream/master`
- Create a new branch to work on the new feature or bug via the updated master branch `git checkout -b "branch_name"`
- Work on feature/bug and stage all the files to commit it on that branch `git add .` > `git commit -m "Commit Message"`
- Push the branch to your fork `git push -u origin branch_name`
- Create a pull request.

---

## Contributors

A list of contributors can be found [here](https://github.com/MovingBlocks/ModuleSite/graphs/contributors).
