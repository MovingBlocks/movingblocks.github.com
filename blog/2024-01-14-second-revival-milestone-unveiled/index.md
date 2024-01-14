---
posttype: blog
title: "Revival Milestone 2 Complete - Elevating Quality, Boosting Performance, Advancing to Java 17!"
cover: "./cover.jpg"
description: "Completing Terasology Revival Milestone 2 - where quality meets performance, and Java 17 takes the spotlight. We’re celebrating our achievements and planning our path ahead. Ready to join the journey? New contributors welcome!"
author: "Niruandaleth"
date: "2024-01-14"
tags: ["Announcement"]
---

_Completing Terasology Revival Milestone 2 - where quality meets performance, and Java 17 takes the spotlight.
We’re celebrating our achievements and planning our path ahead.
Ready to join the journey? New contributors welcome!_

Hey there, fellow gooeys! Welcome to Terasology, where blocks meet potential ✨
Our project was born in 2011 with the desire to provide a modular canvas for diverse gameplay ideas in a dynamic voxel world with creative possibilities as endless as the blocks themselves.
While we wear our history with pride, our codebase outgrew our maintainer capacity over the years, collecting rust and dust in the face of dwindling contributor and contribution numbers.

Though small, our gooey community is welcoming and inclusive, with room for all voices. Each line of code, every idea, and every contribution counts. 
Recently, our shared love for Terasology propelled us into an exciting phase of revival, where we not only seek to breathe new life into the project but also to invigorate our community.
This is not just about coding — it's about all of us coming together to unlock Terasology's true potential and build a voxel game that we enjoy.

The focus right now? Modernizing and giving our codebase a facelift. We believe that the foundation of our project should be as robust and adaptable as our creative aspirations 💡
The first milestone brought us new contributors, upgraded dependencies, and first progress towards a slimmer, sleeker codebase.
Now it's with pride that we announce the completion of our second revival milestone 🎉
And that's not the end - the third revival milestone already unfurls its sails, and we invite you to join us on our voyage into the future of Terasology ⛵

Let's explore how our second revival milestone added to breathing new life into the codebase, setting the stage for Terasology's grand comeback!

## 📜 Definition of Done: A Checklist of Progress

🎉 In total, we merged [27 engine PRs](https://github.com/MovingBlocks/Terasology/pulls?page=1&q=is%3Apr+sort%3Aupdated-desc+is%3Amerged+merged%3A2023-09-11..2023-11-19) and [20 PRs on libraries and side projects](https://github.com/search?q=-repo%3Amovingblocks%2Fterasology+org%3Amovingblocks+is%3Apr+merged%3A2023-09-11..2023-11-19+&type=pullrequests&p=2) such as gestalt, the launcher, or the module site.

One of our major achievements is the seamless transition to Java 17 driven by _@BSA_, laying the groundwork for a more robust and modern Terasology engine 🛠️
The upgrade not only marks a technical advancement but also signifies our commitment to moving Terasology towards the cutting edge of technology.
If you're already contributor, please refer to https://github.com/MovingBlocks/Terasology/issues/5177 for guidance on what this means for your Terasology workspace.
For new contributors, our updated [Contributor Quickstart Guide](https://terasology.org/Terasology/#/Contributor-Quick-Start) points to the now required Java 17 JDK 💡

Targeting a more user-friendly interface for customizing Terasology worlds in the advanced game setup, _@Niruandaleth_ merged the universe setup screen and world pregeneration screen into a more streamlined flow. Recently joined _@soloturn_ provided major support in pursuing various quality improvements. Checkstyle rule configuration has been optimized to reduce noise and various warnings flagged by different QA tools like checkstyle, spotbugs, and pmd have been diligently addressed, adding to a cleaner, more efficient codebase.
Quality improvements will continue in our next revival milestone - feel free to come aboard! ⛵

The quest for optimal performance is a journey, not a destination 🚀
Milestone 2 marks the beginning of our performance investigations, paving the way for future optimizations that will elevate the gaming experience for our users.
A first success was _@skaldarnar_ identifying leftovers of the VR integration removed in revival milestone 1.
Removing them not only further decluttered our codebase but contributed to a more resource-efficient gameplay experience by halving the required rendering passes.

Together, our community discussed the benefit of having documentation closer to our code.
As a result, we integrated our Terasology engine wiki into our codebase, making it our new ["Knowledge Base"](https://terasology.org/Terasology/#/) provided using Docsify on GitHub Pages, allowing for maintaining code and documentation changes in sync.
All links to our [old wiki](https://github.com/MovingBlocks/Terasology/wiki/) should now point to our ["Knowledge Base"](https://terasology.org/Terasology/#/). If you find any links to our old wiki that we might have missed, please report them on Discord or using a GitHub issue 💡

Next to these bigger efforts, a lot of smaller discussions and activities happened across our GitHub repositories and Discord channels.
_@BSA_, _@Niruandaleth_, and _@skaldarnar_ met once per week virtually to discuss milestone progress, agree on strategic questions, and collaborate on blockers and reviews.
Over the course of our second revival milestone, _@Cervator_ provided guidance for new community members and revivers alike, sharing his knowledge of the project history and in particular its infrastructure.
Long-time contributor _@rzats_ visited the project, bringing Ukrainian locale up to date.
_@qwc_ hosted the Valheim server again for our second revival milestone completion celebrations, adding a touch of community spirit as the year slowly came to its end.

To all our contributors, thank you for your dedication, passion, and relentless pursuit of improving Terasology!
Milestone 2 is more than just a checkpoint; it's a testament to what we can achieve together.
Here's to our community, our contributors, and our potential! 🌈

## 🚀 Terasology Revival Milestone 3: New Contributors Welcome

Embarking on the journey of our third revival milestone, our repositories are wide open for new contributions by friendly people joining our gooey community! 🌟
Whether you're a seasoned developer or just getting started, there's a place for you in our dynamic community. Let's build, innovate, and play together! 🚀💬

Let's delve into the tasks that lie ahead. If you'd like to contribute to a specific task, feel free to ping the respective revivers on our [Discord](https://discord.gg/terasology).

### 🩹 Re-enabling our Contributors

The recent upgrade to Java 17 introduced additional restrictions on accessibility of fields when using reflection.
For us, this affects primarily the serialization of component attributes defined in our engine and various modules.
The resulting issues materialize when testing code changes in-game, potentially blocking development.
_@BSA_, _@Niruandaleth_, and _@skaldarnar_ join forces to adjust and document serialization behavior and component implementation.

Due to the focus of the revival on our engine, module pipelines had not yet been set up again after our recent infrastructure overhaul.
This blocks contributions in module land like fixes or (quality) improvements. 
_@BSA_ and _@Niruandaleth_ plan on re-introducing the module pipelines and addressing potential issues.

In the third revival milestone our mission to investigate and improve performance continues.
Bad performance not only impacts our players, but also our contributors, especially when testing code changes in-game.
_@BSA_ sets out to unravel mysteries behind chunk generation/load-related stuttering based on CoreGameplay. Every stutter addressed is a smoother gameplay experience for our users.

### 🛠️ Quality Assurance

Our codebase is the foundation upon which we're crafting the future of Terasology.
Before we can dive into feature development again, we need to stabilize it and make it as solid as bedrock.
Sharing a passion for reducing errors and warnings reported by quality tooling, _@Niruandaleth_ and _@soloturn_ will continue to improve quality across engine and module land.
Preferring reliable test results over heavy re-trigger fingers, _@Niruandaleth_ and _@skaldarnar_ set out to unravel the cause of flaky integration tests 🔍
In addition, _@Niruandaleth_ plans further refactorings including but not limited to removing obsolete graphic settings, refactoring systems to use auto-config, and leveraging new Java 17 features where applicable.

### 🌟 Improvements for Players

Although we plan to complete a few more milestones before starting to publish Terasology releases again, we already want to improve the lives of our players.
_@Niruandaleth_ will finish the advanced game setup overhaul, enabling an easier customization flow for Terasology worlds.
In addition, _@skaldarnar_ plans to pave the way for multi-version support for the bundled JRE brought by the Terasology Launcher, allowing players to start Terasology without having to install Java themselves. While this is already feasible for Java 11 now, the upgrade to Java 17 requires support for bundling different JRE versions and serve the correct one depending on the Terasology version to be launched.

In conclusion, our second revival milestone served as proof that we are able to modernize our codebase and stay committed to our revival.
It taught us the value of constructive discussions, the power of persistence, and the importance of supporting each other.
As we look ahead to the next chapters of our journey, we do so with optimism and a feeling of progress.
Together, we'll continue to shape the future of Terasology, one milestone at a time. 🌠

---

_This article was partially written with the help of ChatGPT._
