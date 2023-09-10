<h1 align="center">Terasology Website</h1>

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/MovingBlocks/ModuleSite) 
[![status](https://img.shields.io/badge/status-pre--alpha-red.svg)](https://github.com/MovingBlocks/ModuleSite)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/MovingBlocks/ModuleSite.svg)](https://github.com/MovingBlocks/ModuleSite/issues/)

---

<h3 align="center"><b>
  <a href="#community">Community</a> | 
  <a href="#authoring-blog-posts">Authoring Blog Posts</a> | 
  <a href="#development">Development</a> | 
  <a href="#license">License</a>
</b></h3>

This repository contains the codebase of the Terasology website hosted at https://terasology.org/. The website provides easy access to news blog posts and impressions of the game as well as module and contribution information. Terasology and related projects are developed by a group of software enthusiast volunteers under the organization name [MovingBlocks][github movingblocks].

## Community

If you want to get in contact with the **Terasology** community and the whole **MovingBlocks** team, you can easily connect with us, share your ideas, report and solve problems.
We are present in nearly the complete round-up of social networks. Follow/friend us wherever you want, chat with us and tell the world.

&nbsp;

<p align="center">
    <a title="Discord" href="https://discord.gg/terasology"><img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/discord.svg" width="50" height="50" /></a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a title="Twitter" href="https://twitter.com/Terasology"><img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/twitter.svg" width="50" height="50" /></a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a title="Facebook" href="https://www.facebook.com/Terasology"><img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/facebook.svg" width="50" height="50" /></a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a title="Reddit" href="http://www.reddit.com/r/Terasology"><img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/reddit.svg" width="50" height="50" /></a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a title="Youtube" href="https://www.youtube.com/user/blockmaniaTV"><img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/youtube.svg" width="50" height="50" /></a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a title="Patreon" href="https://www.patreon.com/Terasology"><img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/patreon.svg" width="50" height="50" /></a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a title="GitHub Issues" href="https://github.com/MovingBlocks/movingblocks.github.com/issues"><img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/github.svg" width="50" height="50" /></a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a title="Terasology Forum" href="https://forum.terasology.org"><img src="./static/logos/gooey_gray.png" width="48px"/></a>
</p>


## Authoring Blog Posts

Terasology blog posts are authored in [GitHub markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax). They typically cover relatively neutral news related to releases, recent contributions or contributor programs; however, we also value your personal project-related opinions, thoughts, and insights.

> **⚠️ NOTE:** If you write an opinionated post about your personal experiences and views on Terasology or related topics, please add a disclaimer at the top of your blog post indicating this.

All blog posts are stored in the `/blog` directory with a dedicated subdirectory for each of them.
Every blog post directory name consists of the publish date and blog post title: `<date>-<title>`, e.g. `2017-07-14-gsoc-2017-an-overview`
Blog post directory names should not contain non-alphanumeric characters other than dashes (`-`)

> **⚠️ NOTE:** The directory name is, on a technical level, not related to the date and title in the blog post metadata. However, we ask you to comply with our convention and ensure that date and title match the blog post metadata.

Blog post directories should always contain a markdown file named `index.md` which will hold the blog post content and metadata.
Additionally, you can provide a cover image in jpg format named `cover.jpg`.
Optionally, any images you want to include into the blog post should be in jpg format and included in the blog post directory.

### Blog Post Template

To allow your blog post to show up properly on the website and search results, you'll need to use the following template in your `index.md`:

```
---
posttype: blog
title: "My first Terasology blog!"
cover: "./cover.jpg"
description: "This blog is about my latest experience with Terasology"
author: "It's me, Mario!"
date: "2023-04-08"
tags: ["Announcement"]
---

Hello world, this is my newest blog post for Terasology!
I'm so excited to share this with you!

See below the two wonderful screenshots I took.
  <div class="row">
    <div class="col-md-6"> <img src="./image-1.jpg" width="40%" /> </div>
    <div class="col-md-6"> <img src="./image-2.jpg" width="40%" /> </div>
  </div>

```

The upper part is metadata that will processed for nicely displaying your blog post on the website.
THe lower part is your blog post content. You'll also see an example of how to include multiple images side-by-side there.

> **⚠️ NOTE:** All the metadata fields are required.

- `posttype` should always be `blog` (without quotation marks)
- `title` is your news in a short phrase and also the path your blog will be published under, e.g. `blog/my-first-terasology-blog`
   (if you're writing a TeraSaturday post, please prefix it with `TeraSaturday #<id>: ` where "\<id\>" is the last TeraSaturday post ID + 1)
- `cover` should always be `"./cover.jpg"` and the cover a JPG image with ratio 16:9
- `description` is a short one or two line summary of your blog post 
- `author` is your name / nickname / alias - we recommend using either your GitHub or Discord name
- `date` is the date you want your blog post to be published aka. go online (in ISO form: `YYYY-MM-DD`)
   (this feature is no longer supported, your blog post will always be visible irrespective of the date you set)
- `tags` should always be an array, multiple values are possible
   (please tag TeraSaturday posts with "TeraSaturday")



## Development

The Terasology website is built with [Gatsby](https://www.gatsbyjs.org/).
A respective development environment can be installed on macOS, Windows, and Linux (Debian or Ubuntu recommended).
You’ll need at least 1GB of available RAM.

Make sure that you install the following tools to be able to build and serve the website locally:
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)


To install all dependencies, run

```sh
yarn install
```

You can then use the [Gatsby CLI commands](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) `build`, `clean`, `develop` and `serve`.

Our custom source plugin fetches information from GitHub, and therefore needs a GitHub [personal access token] in the environment named `GITHUB_TOKEN`. 

[personal access token]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

> 🧰 Access Tokens in CI
>
> If the token expires, you can follow the ["How to fix an expired GitHub Action token"](https://github.com/MovingBlocks/Terasology/wiki/Maintenance#how-to-fix-an-expired-github-action-token) instructions with the following adjustments:
> * the token required for the custom source plugin does not require additional scopes, which means you can skip step 2
> * steps 4 and 5 should be performed in the [repository settings for actions] and in the [repository settings for dependabot] on the respective `MODULE_FETCH_GITHUB_TOKEN` secrets

[repository settings for actions]: https://github.com/MovingBlocks/movingblocks.github.com/settings/secrets/actions
[repository settings for dependabot]: https://github.com/MovingBlocks/movingblocks.github.com/settings/secrets/dependabot

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

> To learn more about the project structure and working of the project please refer to our [docs](docs/project-structure.md).


## License [![](https://img.shields.io/github/license/MovingBlocks/movingblocks.github.com)](https://opensource.org/licenses/MIT)

The _Terasology website_ is licensed under the [MIT License](https://opensource.org/licenses/MIT).
