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
  <a href="#testing">Testing</a>&nbsp;&nbsp;
  <a href="#contributing">Contributing</a>
</p>

---

<h2 id="about">About The Project</h2>

Terasology’s basic engine can be extended by a huge amount (201 right now!) of modules. Keeping track of them is not the easiest task. This is why this gatsby framework provides an automated generator for a website, listing all of them. This showcase website will increase discoverability by allowing to filter and search for modules by keywords and categories.

---

<h2> Getting Started </h2>

The module website development environment can be installed on macOS, Windows, and Linux (Debian or Ubuntu recommended). You’ll need at least 1GB of available RAM.

---

<h2 id="built-with">Built With</h2>

The following generator is built using the following software, you'll need them installed in your workspace to run properly. 
* [Node](https://nodejs.org/en/)
* [Gatsby](https://www.gatsbyjs.org/)
* [Yarn](https://yarnpkg.com/en/)

---

<h2 id="setup"> Setting Up Development Workspace </h2>

Start by cloning your fork of the ModuleSite repository and connecting the ModuleSite upstream repository:

```
git clone --config pull.rebase git@github.com:YOURUSERNAME/ModuleSite.git
cd ModuleSite
git remote add -f upstream git@github.com:MovingBlocks/ModuleSite.git
```

<h2> Docker Setup </h2>

> **TODO**

<h2> Manual Setup </h2>

<details>
  <summary>Steps</summary>

- Install the following dependencies on your system
  - [Node](https://nodejs.org/en/)
  - [Yarn](https://yarnpkg.com/en/)
  - [Gatsby](https://www.gatsbyjs.org/)

- '`cd`' into the directory

- Run '`yarn`' inside the directory to install all the dependencies

- Once the dependencies are installed you can launch development server via '`yarn run develop`'

</details>

---

> To learn more about the project structure and working of the project please refer to our [docs](docs/project-structure.md).

<h2 id="testing">Testing</h2>

> TODO

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
