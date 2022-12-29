# How to write blog on ModuleSite

Currently all the blogs are in `/blog` directory. A paticular blog inside `/blog` contains readme file i.e `index.md`
and images related to it. There are some convention and few steps you can follow to write a blog

## Steps to Write a blog

1. Fork and Clone ModuleSite
2. Create a directory inside `/blog` followed by naming directory with date and blog title
3. create a file index.md inside you blog folder and import images that are require for blog

Below is the simple blog template which is basically `index.md` file

### Simple blog template

```
---
posttype: blog
title: "<Blog Name>"
cover: "./cover.jpg"
description: "<This blog is about Terasology in GSoC>"
author: "<Blog writter>"
ddate: "July 14th, 2017"
date: "2017-07-14
tags: ["GSoC", "Update"]
---

<---------------------- Blog Content --------------------------->

```

> **⚠️ NOTE:** All the argument in the frontmatter are required.

`posttype` should be blog only. `title` involves blog name. `tags` should always be an array and their can be multiple tags.
`description` is short one or two line summary of blog. `ddate` is date in words followed by month,day,year. `date` is date in number followed by YY-MM-DD. `cover` is path of the image banner image in your blog.

## Some conventions to follow while writing blog

- Paticular blog directory should be named with date and blog title. Example: `2017-07-14-gsoc-2017-an-overview`.
- Blog directory name should not contain symbols.
- Blog Content containing HTML tags should closed. Example: `<tr></tr>`
- Banner image should only be named as `cover.png or cover.jpg`

## Generating images for blog

Generating images for TeraSaturday, TeraSpotlight and custom logo on a image require some extra arguments to be added in frontmatter

For `TeraSaturday` and `TeraSpotlight` blog

```
imageTag: "TeraSaturday"
postNumber: "#15"
mainImage: "./static/images/15.jpg"
```

`imageTag` can be TeraSaturday or TeraSpotlight, any other text will be not valid. `postNumber` is TeraSaturday or TeraSpotlight post number followed by "#" and number. `mainImage` is a path of a background in which blog writter want to overlay the TeraSaturday or TeraSpotlight text

> **⚠️ NOTE:** Their should be a dummy `cover.jpg` image in blog directory so that it can be replaced during generation and also cover image path should be `cover: "./cover.jpg"`.

For custom logo on image

```
imagetag: "Other"
customLogo: "./static/logos/gsoc.jpg"
mainImage: "./static/images/14.jpg"
position: "end"
```

`imageTag` will be `other` for custom logo on a image, any other text will be not valid. `customLogo` is path of the logo
.`mainImage` is a path of a background in which blog writter want to overlay the logo. `position` can be start, center or end.

After all the above setup for generating images it should be followed by command
``yarn run generate-images`

> **⚠️ NOTE:** For generating images development server should be running on different terimnal
