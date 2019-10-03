<h1 align="center">Module Showcase Website</h1>

<h5 align="center">Keeping track of Terasology's modules since 2019.</h5>

[![status](https://img.shields.io/badge/status-pre--alpha-red.svg)](https://github.com/Terasology/terasology.github.io)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/Terasology/terasology.github.io.svg)](https://github.com/Terasology/terasology.github.io/issues/)

---

<p align="center">
  <a href="#setup">About</a>&nbsp;&nbsp;
  <a href="#help">Setup</a>&nbsp;&nbsp;
  <a href="#testing">Testing</a>&nbsp;&nbsp;
  <a href="#contributing">Contributing</a>
</p>

---

<h2 id="about">About The Project</h2>

Terasology’s basic engine can be extended by a huge amount (201 right now!) of modules. Keeping track of them is not the easiest task. This is why this gatsby framework provides an automated generator for a website, listing all of them. This showcase website will increase discoverability by allowing to filter and search for modules by keywords and categories.

<h2 id="built-with">Built With</h2>

The following generator is built using the following software, you'll need them installed in your workspace to run properly. 
* [Node](https://nodejs.org/en/)
* [Gatsby](https://www.gatsbyjs.org/)
* [Yarn](https://yarnpkg.com/en/)

<h2 id="setup">Setup</h2>

The generator uses node and backend framework and yarn as a pack manager.

* node

Download and setup NodeJs from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

* yarn

Download and setup yarn package manager from [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

* gatsby-cli

You can install `gatsby-cli` using npm via `npm install -g gatsby-cli` 

- Fork the repository
- Clone the repository `git clone forked-repository-link`
- Navigate inside the repository `cd terasology.github.io`
- Install the dependencies ( yarn is recommended ) `yarn`
- Test the website `gatsby develop`

<h2 id="testing">Testing</h2>

<h2 id="contributing">Contributing</h2>

To add a new feature or fix a bug follow the steps - 

- Make sure your local workspace is up-to-date with the main repository.
    - Add the original repository as `upstream` in you local git remote `git remote add upstream https://github.com/Terasology/terasology.github.io`
    - Fetch the latest code `git fetch upstream`
    - Checkout to your local master branch `git checkout master`
    - Merge changes from `upstream/master` to sync `git merge upstream/master`
- Create a new branch to work on the new feature or bug via the updated master branch `git checkout -b "branch_name"`
- Work on feature/bug and stage all the files to commit it on that branch `git add .` > `git commit -m "Commit Message"`
- Push the branch to your fork `git push -u origin branch_name`
- Create a pull request.
