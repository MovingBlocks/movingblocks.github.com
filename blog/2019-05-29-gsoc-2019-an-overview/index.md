---
posttype: "blog"
title: "GSOC 2019 - An Overview"
cover: "./cover.jpg"
description: "It’s that time of the year again - Google Summer of Code (GSOC) is ahead of us. For the 4th year running we welcome students to become part of our community and join efforts with mentors..."
author: "Niruandaleth & Skaldarnar"
date: "2019-05-29"
tags: ["GSoC"]
---

It’s that time of the year again - Google Summer of Code (GSOC) is ahead of us.
For the 4th year running we welcome students to become part of our community and join efforts with mentors and other contributors to make Terasology even more awesome!
This year we also have a personal first: We are listed as “The Terasology Foundation”!

But what is [GSOC]?
It is a 3-month program sponsored by Google that motivates students from all over the world to join open-source organizations and thrive on real-world software development challenges.
Organizations and students find and interact with each other directly and on a social and community-driven basis.  

This year we welcome 9 students to work with us on [various topics](https://summerofcode.withgoogle.com/organizations/4777549354237952/), ranging from content and game modes over user experience to under-the-hood technologies.

Without further ado, let’s jump right in - and may the 4th year of GSoC be with you. 🖖

# Game Modes

Terasology itself is only the bare-bone engine that lies underneath all the amazing modules that our contributors build.
Game modes bundle these modules together enabling players to immerse themselves into different worlds - be it a classic Craft’n’Survive scenario or an adventurous puzzle.

## Light And Shadow by _darshan3_

The idea for the [Light and Shadow] game mode dates back to 2013 when SuperSnark came up with neat artworks backed by elaborate lore of quarreling factions and way too many ideas for a single person to implement.

![LightAndShadow](./las_red-keep.png)

We are happy that _darshan3_ takes on the task to develop this idea into a fast-paced Capture-the-Flag mode set in a fantasy world.
He can build on present board-game-like model designs and animations provided by glasz and others, such as poker chip trees and fighting chess pieces.
At the end of the summer, the existing features will be expanded by team balancing, automated respawn and round restart, as well as new equipment for attack and defense.

## Metal Renegades

Metal Renegades is another brilliant idea born out of the imagination of our Lore Master SuperSnark.
Set in a futuristic and steampunky western world populated by robots, another faction conflict arises.
By gathering resources, building mechanical systems and interacting with NPCs, the player can influence this open world.

![MetalRenegades](./mr_good-bad-gooey.jpg)

_AndyTechGuy_ will make this idea come to life in an initial world implementation including [basic world] generation with settlements and outposts themed to this setting.
Another deliverable will be NPCs and their interaction with the player.

The [interaction of players] among themselves will be brought in by _Mayant Mukul_ including game mechanics for fighting, hunting and looting.
The player will furthermore be enabled to sell or trade gathered items.

# Content

Full-fledged game modes depend on content modules delivering specific mechanisms or themes.
These building blocks are essential to our open, modularized framework.

## Apiculture by _Cameron McWilliams_

[Apiculture] is all about bees.
Inspired by the Forestry and ExtraBees mods for Minecraft, _Cameron McWilliams_ raises awareness for sustainability and preserving nature.
On the technical side, this project introduces a framework to manage items or blocks used in multiple modules and provides the possibility to simulate genomes.
As an extra we get a bee-focused gameplay integration into Josharias’ Survival.

## Restoration 100 by _E. Aakash_

With “[Restoration 100]”, _E. Aakash_ tackles on of the core elements in every game: the player’s (in-game) health.
He realized that no matter if a game mode uses hunger, thirst or health in general, this is always some kind of point pool that can be drained or filled.
The target is to provide a well-defined API to other developers that want to use this concept in their modules or game modes.

# UX and Tools

Even the best games will not be played if you don’t provide good user experience and tooling around them.
How to start the game?
How to manage versions and updates?
What modules are trending?

## Module Showcase Website by _majordwarf_

Terasology’s basic engine can be extended by a huge amount (201 right now!) of modules.
Keeping track of them is not the easiest task.
This is why _majordwarf_ plans to provide an automated generator for a website, listing all of them.
This [showcase] website will increase discoverability by allowing to filter and search for modules by keywords and categories.

## Terasology Launcher 4.0 by _Priyadarshi Raj_

Our launcher has gone through multiple changes up to now and there’s another one waiting right ahead: _Priydarshi Raj_ will not only modernize the UI, but also integrate server and game management.
Furthermore, the launcher will be self-contained in the future without the need to download and set-up additional software such as Java.

![Launcher 4.0](./launcher-4.0-mockup.jpg)

# Technology

Technical parts that reside in the depth of Terasology’s implementation may not be (immediately) visible to players but are crucial for all the individual gears of the project to interlock.
The final two projects are tinkering with things under the hood.

## Collective Behavior by _casals_

_casals_ is our first-ever GSoC PhD student.
He plans to bring in [collective behaviour] concepts to be used among multiple actors.
In his words: “Collective behavior can be illustrated by a pack of jackals: depending on a certain criteria being satisfied (number of jackals in the pack, number of preys/enemies around), they can either decide to attack or to flee - as a group. But for that to happen, they need to be aware of each other, and to share a behavior.”

## Rendering DAG by _David S_

_David S_ shows ambition to become the new Wizard of Shaderland and Sorcerer of [Rendering DAG].
A directed acyclic graph (DAG) consists of nodes and edges where nodes are features, such as frame-buffers and shaders, and edges denote dependencies between these features.
The wizard and sorcerer strides towards softening the dependencies currently hard-coded in the nodes and enabling the expression of magical inter-node dependencies.

---

> _The way students report their progress is determined by the student and their mentors. There is no policy applying to
> all participants, that's why you might find blogs, forum reports for others, or only technical discussion and
> documentation for one or another student. We encourage this diversity and are always excited about the format of
> project documentation._
>
> _The project summaries and descriptions are partly taken from the student's proposals._

<!-- References -->
[GSOC]: https://summerofcode.withgoogle.com/
[DestSol]: http://destinationsol.org/
[Light and Shadow]: http://forum.terasology.org/threads/las-light-and-shadow-art-discussion.762/
[basic world]: https://trello.com/c/HySvX0oY/106-andytechguy-metal-renegades-world
[interaction of players]: https://trello.com/c/ai7v5Q16/107-wabadump-metal-renegades-multiplayer
[Apiculture]: https://forum.terasology.org/threads/gsoc-2019-apiculture.2267/
[Restoration 100]: https://forum.terasology.org/threads/health-overhaul-gsoc-2019.2263/
[showcase]: https://forum.terasology.org/threads/gsoc-proposal-draft-module-showcase-website.2237/
[launcher]: https://praj.home.blog/2019/05/25/gsoc-2019-the-project-ill-be-working-on/
[collective behaviour]: https://trello.com/c/9mWFmr17/112-casals-collective-madness
[Rendering DAG]: https://trello.com/c/vJr1Qh5I/109-dave2s-dag