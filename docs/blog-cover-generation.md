## Generating Blog Post Covers

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
customLogo: "./static/logos/gsoc.png"
mainImage: "./static/images/14.jpg"
position: "end"
```

`imageTag` will be `other` for custom logo on a image, any other text will be not valid. `customLogo` is path of the logo
.`mainImage` is a path of a background in which blog writter want to overlay the logo. `position` can be start, center or end.

After all the above setup for generating images it should be followed by command
``yarn run generate-images`

> **⚠️ NOTE:** For generating images development server should be running on different terimnal
