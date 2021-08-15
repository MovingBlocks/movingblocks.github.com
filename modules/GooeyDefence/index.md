---
posttype: "module" 
title: GooeyDefence
description: "Tower-defense style gameplay in which the player needs to defend the center of the gameplay arena against incoming waves of Gooeys by building "towers" that attack them."
cover: "./cover.png"
tags: ["Gameplay"]
---
<div align="center">
<img src="./docs/_media/banner.png">
</div>

_This is a module for [Terasology].
It adds the "Gooey's Defence" gameplay to the game, which is a tower-defense style gameplay experience.
The goal is to defend the center of the arena against the malicious Gooeys spawning in waves in the outer areas of the arena and traversing it.
The player can buy tower components to build towers with various effects to keep the Gooeys from reaching the center._

<h2 align="center"><a href="https://terasology.github.io/GooeyDefence/">👉 Documentation 👈</a></h2>

## Contributing

We welcome contributions to our modules, be it bug fixes or feature contributions.
Check out the [Contributor Guide][contributor-guide] on the main project wiki to learn more.

To check out this module (and all its dependencies) to your Terasology workspace run (in the workspace root):

```
groovyw module recurse GooeyDefence
```

To build a module JAR for just this module run (in the workspace root):

```
gradlew :module:GooeyDefence:jar
```

To run all tests and static code checks for this module run (in the workspace root):

```
gradlew :module:GooeyDefence:check
```

### Documentation via gh-pages

The documentation of this module is built with [docsify].
It is served via [gh-pages].
To preview the site you can either use the `docsify` [CLI tool](https://github.com/docsifyjs/docsify-cli) or just run a static server on the `docs` folder.

<!-- References -->
[Terasology]: https://github.com/MovingBlocks/Terasology
[gh-pages]: https://pages.github.com/
[docsify]: https://docsify.js.org/#/
[contributor-guide]: https://github.com/MovingBlocks/Terasology/wiki/Contributor-Quick-Start

