---
posttype: "module" 
title: MetalRenegades
description: "A harsh western world with a robotic twist."
cover: "./cover.png"
tags: ["Gameplay"]
---
# Metal Renegades

_This is a module for [Terasology].
It provides a gameplay mode for a harsh western world with a robotic twist._

<h2 align="center"><a href="https://terasology.github.io/MetalRenegades">👉 Documentation 👈</a></h2>

![The robots of Metal Renegades](https://forum.terasology.org/attachments/good-bad-gooey-png.1523/)

## Contributing

We welcome contributions to our modules, be it bug fixes or feature contributions. 
Check out the [Contributor Guide][contributor-guide] on the main project wiki to learn more.

To check out this module (and all its dependencies) to your Terasology workspace run (in the workspace root):

```
groovyw module recurse MetalRenegades
```

To build a module JAR for just this module run (in the workspace root):

```
gradlew :module:MetalRenegades:jar
```

To run all tests and static code checks for this module run (in the workspace root):

```
gradlew :module:MetalRenegades:check
```

### Documentation via gh-pages

The documentation of this module is build with [docsify]. 
It is served via [gh-pages].
To preview the site you can either use the `docsify` [CLI tool](https://github.com/docsifyjs/docsify-cli) or just run a static server on the `docs` folder.

<!-- References -->
[Terasology]: https://github.com/MovingBlocks/Terasology
[gh-pages]: https://pages.github.com/
[docsify]: https://docsify.js.org/#/
[contributor-guide]: https://github.com/MovingBlocks/Terasology/wiki/Contributor-Quick-Start
 