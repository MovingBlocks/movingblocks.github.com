---
posttype: "blog"
title: "GSOC 2020 - Conclusion"
cover: "./cover.jpg"
description: "Google Summer of Code 2020 is over 🏁 
  The students' projects are done and they had some time to recover.
  Read on to get a brief overview of the achievements of our GSoC students."
author: "Niruandaleth"
date: "2020-09-27"
tags: ["GSoC"]
---

Our 5th year anniversary of inviting Google Summer of Code (GSOC) students into our community is over.
This year, we [welcomed](https://terasology.org/2020/05/30/gsoc-2020-students.html) six students to join efforts with mentors and other contributors to make Terasology even more awesome!
Two more students were working on GSoC projects for Coduino under Terasology as the "umbrella organization":
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Congratulations <a href="https://twitter.com/Rupeshkrj2?ref_src=twsrc%5Etfw">@Rupeshkrj2</a> and <a href="https://twitter.com/AselPeiris1?ref_src=twsrc%5Etfw">@AselPeiris1</a> for passing your final evaluation. We had a wonderful time working with you both!💜 <a href="https://t.co/CgY68ZlqIO">https://t.co/CgY68ZlqIO</a></p>&mdash; Codeuino (@codeuino) <a href="https://twitter.com/codeuino/status/1303993925833613312?ref_src=twsrc%5Etfw">September 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

**Quick Reminder:** [GSOC](https://summerofcode.withgoogle.com/) is a 3-month program sponsored by Google that motivates students from all over the world to join open-source organizations and thrive on real-world software development challenges.
Organizations and students find and interact with each other directly and on a social and community-driven basis.

When our students were mid-way through their GSOC projects, [a lot of progress was already visible](https://terasology.org/2020/07/19/gsoc-2020-midterm.html).
Let's take a look what the final results of each project looks like 🔍

# Metal Renegades: Refining Gameplay
## - by _AndyTechGuy_

👉 [Final Report (blog post on blogspot.com)](https://andytechguy.blogspot.com/2020/08/gsoc-2020-final-report.html)

This GSoC, our second year student _AndyTechGuy_ polished the technical backbone implemented last year into an improved gameplay mode called "Metal Renegades".
The main aspects of this year's work included adding new gameplay features to the module, refining already existing features, and fixing bugs that negatively impact the core experience.

![Metal Renegades](MR_compilation.jpg)

Newly introduced features included discoverable places where the player may find food, tools or valuables and nighttime enemies the players must fight or avoid by busing themselves in town.
Improvements and fixes on the other hand targeted the market and trading system and its multiplayer capabilities, performance issues especially induced by city growth, and balancing the survival possibilities by making wells dry out after several uses and adding more food sources.


# Biome-specific Content Enhancements for Terasology
## - by _ktksan_

👉 [Final Report (forum.terasology.org)](https://forum.terasology.org/threads/biome-specific-content-weekly-updates.2322/page-2#post-16881)

In their GSoC project, our student _ktksan_ introduced biome-specific content for biomes with extreme climatic conditions such as the desert and snow biomes.
To keep the gameplay balance, this content included negative effects on the player as well as ways to overcome these obstacles.

![Biome-specific Content](JS_compilation.jpg)

The negative effects affect the player based on their body temperature: if the player gets too cold they will show symptoms of hypothermia, e.g. movement reductions or frostbite damage; if the player gets too warm they will show symptoms of hyperthermia, e.g. increased thirst and heat stroke weakness in the form of reduced maximum health.
To lessen or overcome these effects the players can protect themselves with warming or cooling clothes, such as a woolen vest or an arabic thawb and carry additional water resources with a waterskin.
Additionally, players are motivated to face these extreme climate conditions by exploration objects like igloos and oases offering rewarding items.


# Genome Expansion
## - by _Vedant Shroff_

👉 [Final Report (blog post on medium.com)](https://medium.com/@vedant.294/gsoc-2020-genome-expansion-wrapping-up-87ab8fd3047b)

Over the course of this year's GSoC, our student _Vedant Shroff_ revived the "Genomes" module in order to bring it up to date and add missing key features that allow any easy integration with other modules such as "WildAnimals" or "SimpleFarming".
Further, their focus was on breeding and more variety for example in seeds.

![Genome Expansion](Genomes_compilation.jpg)

The integration with "SimpleFarming" includes seeds having genes (persisted across multiple generations of harvest/plant cycles) that define their traits, for instance their color, how fast they grow and how well they sate the player.
Breeding is now provided for both seeds and animals with the overhauled breeding mechanism supporting individual breeding algorithms for the individual traits to be affected.


# Terasology Game Hud, Graphics Improvement & Gameplay Guide
## - by _Stefania Mak_

👉 [Final Report (gist.github.com)](https://gist.github.com/stefaniamak/44ae4cb491d0bec61e77ab7cb513c721)

Our student _Stefania Mak_ started out learning the Terasology UI ropes by overhauling the task selection screen in "MasterofOreon".
Afterwards, they focused mainly on improving the optics and user experience for our capture-the-flag gameplay "LightAndShadow" (LAS).

![LAS UI/UX Overhaul](LAS_compilation.jpg)

The optical improvements included a LAS-style loading screen, the modernization of the dialogue with the fool, an update for the game over screen with player stats along with multiple smaller design improvements for the score and inventory bar.
The user experience was improved by bringing the (apart from the flag of course) most important in-game player asset - their health - more in focus and by reworking the inventory bar from the minecraft-default horizontal bar to a scroll-through vertical version.


# Interactive Journey in Terasology Contributions
## - by _Pratham Sahasrabhojane_

👉 [Final Report (blog post on dev.to)](https://dev.to/theshubham99/gsoc-final-code-submission-3aad)

In their GSoC project, our student _Pratham Sahasrabhojane_ developed a web app providing Terasology's various documentation resources to new contributors in a conversational form.
This "Tutorial Journey" or "Adventure Site" supports new contributors to find suitable resources based on their contribution interests.

![Adventure Site: Mockup vs. Final App](Outreach_compilation.jpg)

During the GSoC period, the student started out by creating mockups and learn about the various contribution paths available for Terasology.
Afterwards, they created the data backend and front end components including animations and transitions.


# Converting "Destination: Sol" systems to use ECS
## - by _Isaac lichter_

👉 [Final Report (destinationsol.org)](http://destinationsol.org/2020/08/27/gsoc-wrap-up.html)

In this year's GSoC, our student _Isaac lichter_ brought the side-project of the Terasology Foundation, "Destination Sol", closer to our main project, Terasology, by transferring it to the Entity-Component-System (ECS) architecture used in Terasology.
Terasology uses the ECS library "Gestalt" that aloowed the student to create basic systems, small features, refactorings, bug fixes and proof-of-concepts on how to make further use of this new architecture.

![Destination Sol](DS_compilation.jpg)

The basic systems that were created include health, force and contact handling, entity removal, physics, graphics and projectile handling.
Introduced features were rubble creation, stasis and money-dropping and a proof-of-concept for asteroids.
Further, impulse handling, sprite scaling and the "EmptyComponent" implementation were refactored/fixed.
