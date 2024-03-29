---
posttype: "blog"
title: "GSOC 2018 - Results"
cover: "./cover.jpg"
description: "For Google Summer of Code (GSOC) 2018 we had 9 awesome students working on a mix of content tasks and other improvements."
author: "Cervator"
date: "2018-09-02"
tags: ["GSoC"]
---

For Google Summer of Code (GSOC) 2018 we had 9 awesome students working on a mix of content tasks and other improvements.

All students projects were successful and passed, although as usual predicting exactly how far along a project will get over the summer can be tricky so there's still some more work to do on some.

Thank you so very much for all our appreciated students and mentors for 2018! Hopefully we can keep rolling and get better each time. It has been an educational summer, and not just for the students :-)

## UX Improvements by @ar0ne

[Trello](https://trello.com/c/L6QIKSi0) | [GitHub Board](https://github.com/orgs/MovingBlocks/projects/12) | [Forum Thread](https://forum.terasology.org/threads/gsoc-2018-save-module-ux.2174) | [Final Report](https://ar0ne.github.io/gsoc/)

Serj's project was an assortment of UI enhancements to make game selection and creation more informative. Saved games now have preview screenshots and a detail page with a wealth of information, including a bunch of extension points that can be added to in the future. Modules likewise now have a details screen, with a variety of utility like better dependency visibility and links to the module's homepage.

There was a fair amount of interaction and collaboration between this project and both the event recording and multi-world projects. All three to some degree are rooted in the game selection or creation UI flows. It seems to have been a very useful experience coordinating tweaks in the area, and as a result the involved code and associated UIs is vastly better today than when GSOC started!

See the final report or forum thread for a variety of screenshots. All changes are available in the latest game builds, with some outstanding issues and potential improvements [documented on GitHub](https://github.com/MovingBlocks/Terasology/issues/3400)

## Game-agnostic computer system by @asiekierka

[Trello](https://trello.com/c/eve26hBR) | [GitHub Board](https://github.com/orgs/Terasology/projects/13) | [Forum Thread](https://forum.terasology.org/threads/gsoc-2018-frameworks-and-content.2175/) | [Final Report](https://forum.terasology.org/threads/gsoc-2018-frameworks-and-content.2175/#post-16063)

Originally Asie had actually submitted a proposal on a series of gameplay content frameworks akin to some prior work in Minecraft Modding, but analysis over the bonding period showed that too many dependent changes to the engine would be needed, making scope very tricky, especially as some parts would depend on specific contributors who would not necessarily be available on a timely basis. As a result we did a fruitful replanning session.

By the time the work period began the goal had changed to a single bigger gameplay system involving a in-game computer system that could be used both in Terasology and other games, such as our other game project [Destination Sol](https://github.com/MovingBlocks/DestinationSol)

The system works via a [Java Native Lua](https://github.com/MovingBlocks/JNLua) that runs virtually in-game with the ability to execute Lua scripts and interact with the game world. Thanks to the nice architecture a simulator can run out of game for testing as well, with adapters able to be written to support other games or other existing fantasy computer systems ([OpenComputers](https://ocdoc.cil.li/) is the current system supported)

## Light & Shadow CTF by @dacharya64

[Trello](https://trello.com/c/Dtyp7yiT) | [GitHub Board](https://github.com/orgs/Terasology/projects/11) | [Forum Thread](https://forum.terasology.org/threads/gsoc-2018-light-and-shadow.2166/) | [Final Report](http://dacharya64.postach.io/post/gsoc-final-project-wrapup)

This was another content project, focusing on making a replayable Capture The Flag (CTF) mode for our long-standing Light & Shadow game setting. Devi had to pick up an assortment of existing pieces plus add new ones while putting everything into a cohesive whole that would support the sort of gameplay you'd expect with CTF. Relying entirely on multiplayer meant this project reached into the challenges of making everything work properly on the network.

The first big piece was better preparing the game world using an existing "spawn platform" (serving as a sort of lobby) and various artwork assets. Home bases exist for the two teams and you can teleport down to join a specific team. More world features are planned to make for a more interesting battlefield.

A second large piece was making actual CTF functionality work, which is probably where most complexity snuck in, to make everything reliable in multiplayer. Players can steal flags from the enemy base, each other, and make a capture back at their home base. A player carrying a flag gets an awesome shower of particles to indicate they're the flag carrier! A double-screenie follows (flag carrier on left, flag chaser on right)

![LightAndShadow](./LnS1.jpg)

## Event recording and playback by @iaronaraujo

[Trello](https://trello.com/c/zsp3wDNQ) | [GitHub Board](https://github.com/orgs/MovingBlocks/projects/13) | [Forum Thread](https://forum.terasology.org/threads/gsoc-2018-event-recording-proposal.2169/) | [Final Report](https://iaronaraujo.wixsite.com/meusite/blog/google-summer-of-code-2018-final-report)

Iaron worked on another highly technical project we were unsure about scope-wise, as the implementation could have gotten very sophisticated and tricky to pull off. Am thrilled it both worked and exceeded expectations! You can now start a recording session off an existing save game, take an arbitrary series of actions, then later have the game replay them - even on a different version of the game!

This should help us prepare acceptance tests as you can assert state during the replay to confirm that a thing did happen at a specific point and so forth. It even works using a headless game client, which was a welcome surprise! That lets us run the tests in our Jenkins during continuous integration.

There are still a couple directions it could be improved in to add further utility, chief among them being solely recording input events then replaying them on a _different_ world rather than start with a saved game. Then you could create standalone tests and re-run them in a variety of game configurations for more coverage.

[Here](https://youtu.be/L6yO5B2p3nA) is a video showing a test being run, in this case with a headed game client (the test script drives the whole interaction, the user isn't doing anything but starting the test)

<div class="videowrapper">
    <iframe width="1024" height="768" src="https://www.youtube.com/embed/L6yO5B2p3nA" frameborder="0" allowfullscreen=""></iframe>
</div>

## Server facade improvements by @Inei1

[Trello](https://trello.com/c/FTMelamF) | [GitHub Board](https://github.com/orgs/MovingBlocks/projects/14) | [Forum Thread](https://forum.terasology.org/threads/gsoc-2018-improving-the-server-facade.2170/) | [Final Report](https://forum.terasology.org/threads/gsoc-2018-improving-the-server-facade.2170/#post-16059)

Terasology actually uses a system of facades running in front of our engine, but it is rare anybody knows or even realizes this - which is the point! One of the alternatives to the regular PC application facade is an advanced server facade when you're hosting a headless instance of the game for multiplayer. Itself [mostly a product of GSOC 2017](https://forum.terasology.org/threads/facadeserver-headless-server-with-web-interface.1906) Neil added another round of improvements for 2018, mentored by the 2017 student Gianluca :-)

With GSOC 2018 complete when you use the advanced server facade you can now view a game map from a website, manage user permissions, administer the server config, whitelist/blacklist users, view resources consumed by the server, and so on. Cool stuff! This facade is now also bundled with the main game zip including executables to start the server the fancy way.

There are even unit tests! :D

## Tower Defense by @jellysnake

[Trello](https://trello.com/c/eNZ8Ww6r) | [GitHub Board](https://github.com/orgs/Terasology/projects/15) | [Forum Thread](https://forum.terasology.org/threads/gsoc-2018-tower-defence.2178/) | [Final Report](https://github.com/Terasology/GooeyDefence/wiki/Summer-of-Code)

Jelly put together maybe the most cohesive and replayable content Terasology now contains: a fun and engaging tower defense mode with nice visuals and a randomized play field. He also did this with a huge degree of independence while also producing naturally well-architected code and great documentation. A superbly well done project :-)

The header image from this blog post is from GooeyDefence. It is included in the latest builds, just pick it when creating a new game, `e` click the center shrine to progress in enemy waves, and buy tower parts through the inventory accessed with the `i` key. Go play it right now and let us know how you like it!

## GooKeeper by @l0ftyWhizZ

[Trello](https://trello.com/c/FOaU0sTs) | [GitHub Board](https://github.com/orgs/Terasology/projects/14) | [Forum Thread](https://forum.terasology.org/threads/gsoc-2018-gookeeper.2172) | [Final Report](https://gist.github.com/l0ftyWhizZ/121194027c49b2b11a4997b0e3e822bb)

Another one of the content projects this year was GooKeeper, a [recently introduced new game concept](https://forum.terasology.org/threads/gookeeper-game-concept.2099/) inspired some by Slime Rancher. Lofty did great work on several gameplay systems so you can create a zoo, invite in guests to visit pens and provide you with income, even breed new types of Gooeys.

Like GooeyDefence this project is playable in the latest builds, so go nuts! :-) There is plenty of space to extend this (and all the content projects this year) into more creature types, pens, constraints on how you can design zoos, feed your critters, find them out in the wild, and so on.

See [the following video](https://youtu.be/aCRC0XGsadA) for a demonstration of the breeding system to make new types:

<div class="videowrapper">
    <iframe width="1024" height="768" src="https://www.youtube.com/embed/aCRC0XGsadA" frameborder="0" allowfullscreen=""></iframe>
</div>

## Master of Oreon overhaul by @Naman-sopho

[Trello](https://trello.com/c/BhJebP9h) | [GitHub Board](https://github.com/orgs/Terasology/projects/10) | [Forum Thread](https://forum.terasology.org/threads/gsoc-2018-renovation-of-masteroforeon.2171/) | [Final Report](https://naman-sopho.github.io/2018-08-07-GSoCWrapUp/)

The final content project for GSOC 2018 is by Naman, and has the most potential for complex systems involving semi-autonomous creature societies, our very first stated ultimate game goal at long last - just took us 7 years to get here! ;-)

The initial state of gameplay contains the basics: a way to assign tasks to the Oreons, our first supported creature race, so they can help plant fields, harvest produce, construct buildings, guard areas, and so on. They need to eat after hard work and can improve their attributes over time. There is also a research system and a way to upgrade things.

More "gameplay loops" are needed to bring more depths to MOO, and thanks to Naman that's now something just about anybody can pick up to help out with! There's even an [awesome showcase video](https://www.youtube.com/watch?v=F5CGjjePnbA) introducing the concepts:

<div class="videowrapper">
    <iframe width="1024" height="768" src="https://www.youtube.com/embed/F5CGjjePnbA" frameborder="0" allowfullscreen=""></iframe>
</div>

## Multi-world support by @theflash98

[Trello](https://trello.com/c/dYU1iOul) | [GitHub Board](https://github.com/orgs/MovingBlocks/projects/15) | [Forum Thread](https://forum.terasology.org/threads/gsoc-2018-multiple-worlds.2168/) | [Final Report](https://theflash98.github.io/main/2018/08/12/GSoC-Wrap-Up.html)

Flash attacked another one of the technically complex topics: adding support for multiple independent worlds (planets, dimensions, etc) inside a single game. This had another set of uncertain effort points, where some things turned out easier than expected and others more difficult, to where great things were accomplished but full multi-world support still eludes us.

First the game UI had to support further selections related to worlds, and this part resulted in more great UI improvements (see [video](https://youtu.be/bg8RBM4piMY) embedded below). The whole create game workflow was overhauled into a series of clear steps with a quick start now available right at the beginning. Huge UX win. Several related old bugs finally met their end!

Architecturally each world would get its own pool of entities and this now works and can even be demonstrated in-game. However the part that proved too much for the summer was how to separate out all the current world initialization steps to where they could happen independently within each world. Next after that we'd then need the in-game logic to move players and such between worlds.

<div class="videowrapper">
    <iframe width="1024" height="768" src="https://www.youtube.com/embed/bg8RBM4piMY" frameborder="0" allowfullscreen=""></iframe>
</div>
