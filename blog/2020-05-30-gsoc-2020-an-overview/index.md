---
posttype: "blog"
title: "GSOC 2020 - An Overview"
cover: "./cover.jpg"
description: "5th year anniversary for Terasology participating in Google Summer of Code 🎉 
  A warm welcome to all six of our students this year!
  Read on to get a brief overview of all projects for the upcoming summer."
author: "Niruandaleth & Skaldarnar"
date: "2020-05-30"
tags: ["GSoC"]
imagetag: "Other"
customLogo: "./static/logos/gsoc.png"
mainImage: "./static/images/14.jpg"
position: "end"
---

This year is the 5th year anniversary for Terasology participating in the Google Summer of Code (GSOC) 🎉
For the 5th year running we welcome students to become part of our community and join efforts with mentors and other contributors to make Terasology even more awesome!

But what is [GSOC]?
It is a 3-month program sponsored by Google that motivates students from all over the world to join open-source organizations and thrive on real-world software development challenges.
Organizations and students find and interact with each other directly and on a social and community-driven basis.

With a lot of stabilization and infrastructure work going on in the background, our GSOC students spent the month of May by getting familiar with the code base and bonding with the community.
Now the last weekend of that period has started and things will get serious starting next monday, so it's time to present the six students that join our efforts.
They will be working on [various topics](https://summerofcode.withgoogle.com/organizations/4775911326482432/), ranging from game content over user interface and experience to contributor education technology, a.k.a. helping new contributors finding what they look for in the chaos we call documentation 😅 🙈.

Without further ado, let's jump right in - and a happy wooden GSOC anniversary!

# Metal Renegades: Refining Gameplay
## - by _AndyTechGuy_

What do you do when your gameplay needs further work? Right: you come back and do the work!
We're happy to welcome back _AndyTechGuy_, who after focusing on the initial technical implementation of the Metal Renegades gameplay last year, intends to [refine the content and game experience] this year.

![Metal Renegades](mr_good-bad-gooey.jpg)

The first objective will be to motivate the player to get active.
The wild wild west is no bed of roses, so hunger, thirst and nightly dangers in the barren surroundings will have the player work hard to survive.
This also brings us to the next point: giving Metal Renegades a better feel to it using discoverables outside the cities, improved NPC personality and making cities, surroundings and the interaction with them more realistic.
Last but not least, the gameplay is currently highly affected by performance and NPC pathfinding issues, that the student will analyze and attempt to fix.


# Biome-specific Content Enhancements for Terasology
## - by _ktksan_

While exploring a world in Terasology, you can find a variety of biomes (with the respective module enabled of course), ranging from snow over plains and mountains to beaches and deserts.
And while these biomes are nice to look at and a welcome change of scene, they currently don't have much of an effect on the player.

![Climate Effects](2020_gsoc_climate-effects.jpg)

_ktksan_ will introduce [biome-specific content] in the form of climate effects for both very cold and very hot biomes, that will induce obstacles such as hypothermia or heat strokes the player will succumb to and perish if they don't find means to overcome them.
To motivate players to take on the risk or put in the effort to craft equipment to counter the climate effects, special structures like an oasis or an igloo settlement with hidden treasures will be added to the respective biomes.
Equipment like woolen clothes and water skins to keep warm or hydrated will be craftable by leveraging flora and fauna of other, more habitable biomes.


# Genome Expansion
## - by _Vedant Shroff_

You want to breed animals to maximize their genetic potential?
Well, as we like to say: "We have a module for that!"
Actually, that's incorrect... we have _two_ modules for that - which is a common situation (read: issue) to be honest 😅

![Genome Expansion](2020_gsoc_genome-expansion.jpg)

In their GSOC project, _Vedant Shroff_ intends to not only unify these two modules to be able to leverage the advantages of both, but also [expand the genome aspect] by integration the result with our modules for farming and edibles.
This will allow players to also "breed" plants and immerse in the gameplay experience of crafting ideal food sources.
May the genes be strong in these plants... ehh, plans.


# Terasology Game Hud, Graphics Improvement & Gameplay Guide
## - by _Stefania Mak_

As the bunch of mostly (technically and content-) focused developers that we are, we lacked an eye for user experience (UX) and appealing user interfaces (UI) for a long time.
But no more, now that _Stefania Mak_ joined us and plans to turn Terasology visuals topsy-turvy.

![HUD overhaul](2020_gsoc_hud-overhaul.jpg)

Terasology is largely perceived as a Minecraft clone and often we reduce our project to exactly that in our minds - but it is so much more.
To dissolve this tight association with Minecraft, improve UI/UX and bring Terasology closer to a distinct identity and style, the student will focus on [overhauling the game's Head-up-Display (HUD) and menu screens].


# Interactive Journey in Terasology Contributions
## - by _Pratham Sahasrabhojane_

Contributing to an open source project is very rewarding, but in the beginning it is also hard and confusing.
The more complex a project and its codebase and the more numerous the contribution possibilities, the more difficult it is to find a good starting point or resources for an easy immersion into the project.

![Interactive Contributor Journey](2020_gsoc_tutorial-journey.jpg)

_Pratham Sahasrabhojane_ plans to change that by providing an [interactive journey for (new) contributors] to get information and directions to possible contribution paths corresponding to their ambitions.
Through a dialogue with the contributor, the resulting app shall point them to documentation and tutorials to get familiar with the aspects of Terasology in their area of interest.


# Converting "Destination: Sol" systems to use ECS
## - by _Isaac lichter_

We're very happy to also have a GSOC project this year that targets _Destination: Sol_ ([DestSol]), the arcade space shooter maintained by _The Terasology Foundation_.
In 2015, _The Terasology Foundation_ (at that time "MovingBlocks") offered infrastructure and maintenance to original author Milosh Petrov.
Since then, there have been many contributions to DestSol, but it never made use of the foundation's [_Gestalt_ library] - until now.

![DestSol](2020_gsoc_dest-sol.png)

_Isaac lichter_ will [incorporate the _Entity-Component-System_ (ECS) provided by _Gestalt_] by refactoring central aspects of the game.
To enable other contributors to join the efforts of porting the whole game to ECS, the student will furthermore write a portation guide on how to integrate with Gestalt's ECS.

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
[_Gestalt_ library]: https://github.com/MovingBlocks/gestalt
[refine the content and game experience]: https://trello.com/b/HB1ZmDtO/gsoc-2020-metal-renegades-refining-gameplay
[biome-specific content]: https://trello.com/b/dT7oWl9X/gsoc-2020-biome-specific-content
[expand the genome aspect]: https://trello.com/b/u0xsLTit/gsoc-2020-terasology-genome-expansion
[overhauling the game's Head-up-Display (HUD) and menu screens]: https://trello.com/b/pcLqkYvp/gsoc-2020-ui-ux
[interactive journey for (new) contributors]: https://trello.com/b/0KnflKHK/gsoc20-tutorial-journey-website
[incorporate the _Entity-Component-System_ (ECS) provided by _Gestalt_]: https://trello.com/c/otWA5UdS/129-isaac-destination-sol