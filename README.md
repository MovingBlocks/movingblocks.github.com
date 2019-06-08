<p align="center">
  <h3 align="center">Module Showcase Website</h3>
  <p align="center">
    Keeping track of Terasology's modules since 2019.
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Setup](#setup)

## About The Project
Terasology’s basic engine can be extended by a huge amount (201 right now!) of modules. Keeping track of them is not the easiest task. This is why this gatsby framework provides an automated generator for a website, listing all of them. This showcase website will increase discoverability by allowing to filter and search for modules by keywords and categories.

### Built With
The following generator is built using the following software, you'll need them installed in your workspace to run properly. 
* [Node](https://nodejs.org/en/)
* [Gatsby](https://www.gatsbyjs.org/)
* [Groovy](http://groovy-lang.org/)

## Getting Started
The generator repository at [https://github.com/Terasology/terasology.github.io](https://github.com/Terasology/terasology.github.io) is the heart and central workspace of Module Showcase Website. To set up the workspace is a fairly easy process:

### Prerequisites
The generator uses node and backend framework and yarn as a pack manager.
* node

Download and setup NodeJs from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

* yarn
```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn
```
If using  `nvm`  you can avoid the  `node`  installation by doing:
```sh
sudo apt-get update && sudo apt-get install --no-install-recommends yarn
```

### Setup
1. Clone the repo
```sh
git clone https://github.com/Terasology/terasology.github.io
```
2. Install Node packages
```sh
yarn
```
3. Run the generator locally
```sh
gatsby  develop
```
