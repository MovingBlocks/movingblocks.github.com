---
posttype: blog
title: "Exploring Revival Milestone 3 - Upgrades, Fixes and Improvements Left, Right and Center"
cover: "./cover.jpg"
description: "Exploring Terasology Revival Milestone 3: Our continued focus on performance and quality was supported by various fixes left and right. We’re celebrating our achievements and planning our path ahead. We’re nearing the gameplay content work phase: Almost Ready!"
author: "Niruandaleth"
date: "2024-06-26"
tags: ["Announcement"]
---

_Exploring Terasology Revival Milestone 3: Our continued focus on performance and quality was supported by various fixes left and right.
We’re celebrating our achievements and planning our path ahead.
We’re nearing the gameplay content work phase: Almost Ready!_

Hey there, fellow gooeys! Welcome to Terasology, where blocks meet potential ✨
Terasology is a unique, Minecraft-inspired project built with modularity in mind and designed to support a wide array of gameplay ideas, allowing for a rich and diverse gaming experience.
Our game isn’t just about blocks; it's about creating an expansive platform where different concepts and mechanics can come to life 🚀
Over the years, our codebase has grown significantly. It is now maintained by a small yet incredibly welcoming and inclusive community.
We pride ourselves on fostering an environment where anyone, regardless of experience, can contribute and help shape the future of our game.
Whether you're a seasoned developer or just starting out, there’s always something you can do to help push our vision forward 🦾

Currently, our efforts are focused on reviving both the project and the community.
We see enormous potential in Terasology and are dedicated to unlocking it together 👨‍👩‍👧‍👦
The current stages of our revival efforts are aimed at modernizing and improving the codebase, making it more robust, efficient, and easier to work with for both seasoned developers and newcomers alike.

Reflecting on our journey, the first milestone was a significant step forward.
We welcomed new contributors, upgraded our dependencies, and streamlined our codebase. 
The second milestone brought even more exciting developments, including the migration to Java 17 and the adoption of a documentation-as-code approach, ensuring that our resources are as up-to-date and accessible as possible.

Now we are excited to announce the completion of our third revival milestone.
This phase continued our focus on performance and quality while new contributors joined in and provided additional bug fixes and refactoring progress.
Right now, we're gearing up for the fourth milestone and are excited about the journey ahead paving the way for innovative content and features 🤓
The journey so far has been both challenging and rewarding and we are grateful for the continued support and contributions from our amazing community. 
Together, we can make Terasology better than ever! 🙌

## 📜 Definition of Done: A Checklist of Progress

🎉 In total, we merged [27 engine PRs](https://github.com/MovingBlocks/Terasology/pulls?page=1&q=is%3Apr+sort%3Aupdated-desc+is%3Amerged+merged%3A2023-11-20..2024-06-16), [78 module PRs](https://github.com/search?q=+org%3Aterasology+is%3Apr+merged%3A2023-11-20..2024-06-16+&type=pullrequests&p=1), and [20 PRs](https://github.com/search?q=-repo%3Amovingblocks%2Fterasology+org%3Amovingblocks+is%3Apr+merged%3A2023-11-20..2024-06-16+&type=pullrequests&p=3) on libraries and side projects such as gestalt, the launcher, or the module site.

After the migration to Java 17 as part of our last milestone, in this milestone we spent time resolving issues arising from this migration 🐛
This involved a thorough review and discussion to determine the relevance of different visibility levels for component fields in terms of serialization, ensuring consistency across the codebase.
We adjusted our serialization approach in the engine accordingly, made all fields in engine and module comopnents public and updated relevant documentation for ECS developers 👩‍💻
You can find our documentation on creating components in our [Entity-Component-System (ECS) Tutorial](https://github.com/Terasology/TutorialEntitySystem/wiki/Creating-Components).
Other moduleland issues resulting from the Java 17 upgrade were also fixed within this milestone.

Similar to the milestones before, we invested time into the updating and adapting to new versions of our dependencies 🛠️
We successfully adapted to the new jsemver library version v0.10.0, which introduced a new API.
This update was required because of test failures that blocked all pull requests, but we swiftly addressed these issues to keep our development pipeline running smoothly ✔
Gradle was upgraded to version 8.5 to prepare for a future upgrades to newer Java versions. Updates in gestalt and JNBullet were also included by consuming newer versions.
The upgrade of slf4j to version 2 allowed to use the fluent API which resolved log guard issures brought to our attention by PMD along with other issues in our modules that were fixed as well.
If ever you notice an outdated dependency, feel free to report it to us or open a pull request updating it 🗨

Meanwhile the investigations in and improvements of performance issues continued, notably with regards to chunk processing.
While singleplayer and multiplayer tests already indicated a performance increase, traces and additional information was collected about additional potential hotspots causing bad performance that are worth looking into 🔍
If you want to contribute to our efforts of improving performance, come talk to us on our [Discord performance channel](https://discord.com/channels/270264625419911192/882575244215341097) or check out [Terasology#5150](https://github.com/MovingBlocks/Terasology/issues/5150) which includes todos and various spots to understand, document, refactor, and improve.

In addition, the user experience got improved for both players and developers.
Players can now enjoy a more streamlined advanced game setup with integrated configuration and preview options for the world they are about to play in. Feel free to check it out and tell us what you think! 🎮
Developers on the other hand are now enabled to get their PRs in much quicker after the flaky engine integration tests were split out into an optional CI step. Furthermore, formerly broken Jenkins pipelines are now up and running again and await your PRs 💻

Thanks to various new contributors as well as our core revival team, we merged many many fixes this milestone 💪
They removed client and server bugs, in-game content and graphics bugs as well as vulnerable web dependencies and broken documentation links 🐞
Thank you to _@Khaled-Dridi_ and _@Imitater967_ for their fixes for the windows fullscren bug and no longer working visual effects and command line arguments 👏
Special thanks go to _@priya4991_, the author of the partial fix for M1 support 💚 This problem is not fully gone yet, so if you develop on Mac and want to contribute to Terasology, any help with getting Terasology on M1 Macs to build and run again would be highly appreciated! 🍎

Next to these bigger efforts, a lot of smaller discussions and activities happened across our GitHub repositories and Discord channels.
_@BSA_ and _@Niruandaleth_ met once per week virtually to discuss milestone progress, agree on strategic questions, and collaborate on blockers and reviews 📅
Over the course of our third revival milestone, _@Cervator_ provided guidance for new community members and revivers alike, sharing his knowledge of the project history and in particular its infrastructure ⌨
Revival milestone contributor already for the previous milestone, _@soloturn_, considerably contributed to this milestone as well by updating dependencies, facilitating migrations to Kotlin, and streamlining PR workflows by addressing issues flagged by PMD 🤓
Recently joined contributors _@spookynutz_ and _@manumafe98_ authored various moduleland PRs refactoring components and test annotations, thus achieving a more consistent use of ECS and our module testing framework 💪
Long-time contributor _@engiValk_ visited the project to fix the water super jump bug reported by @SomethingSomethingV2, improving gameplay consistency 🔨
_@qwc_ will host the Valheim server again for our third revival milestone completion celebrations, fostering team spirit and camaraderie 🕹

In conclusion, Milestone 3 represents a testament to our commitment to excellence in performance, quality, and user experience.
Through collaborative efforts and innovative solutions and with the help of warmly-welcomed new contributors, we continue to push our Terasology revival further 🌈

## 🚀 Terasology Revival Milestone 4: Moving Towards Gameplay Content Work

As we stride into Milestone 4 of our Terasology revival journey, our focus sharpens on preparing the groundwork for working again on gameplay content.
Again, our repositories are wide open for new contributions by friendly people joining our gooey community! 🌟 Whether you're a seasoned developer or just getting started, there's a place for you in our dynamic community.
Here’s a detailed breakdown of our priorities and the contributors driving each task. If you'd like to contribute to a specific task, feel free to ping the respective revivers on our Discord.

### 🛠 Infrastructure & Stability Enhancements

Led by @BenjaminAmos (BSA), we will be migrating to gestalt 8. This involves upgrading dependencies to gestalt 8.0.0-SNAPSHOT and transitioning from nui-gestalt7 to nui-gestalt.
Annotating all relevant annotations and base classes with @Index and @IndexInherited respectively ensures efficient class discovery.
Additionally, replacing deprecated API references with org.terasology.context.annotation.API standardizes our codebase for future enhancements. 🛠️

@jdrueckert (Niruandaleth) will address the flaky integration tests that have been bothering for a while now, particularly those causing sporadic NPEs in chunk lighting.
This investigation ensures our testing suite remains reliable, providing a stable foundation for ongoing development efforts. 🔍

In preparation for future releases, @skaldarnar is enhancing our launcher to support multiple Java versions seamlessly.
This feature allows to start old and new Terasology releases from the same launcher without the need to have a specific Java version installed. 🚀

### 🔍 Performance Optimization & Core Improvements

@BenjaminAmos (BSA) and @jdrueckert (Niruandaleth) continue to investigate performance bottlenecks, particularly focusing on chunk generation and loading stuttering identified in CoreGameplay.
This initiative aims to deliver smoother gameplay experiences across various hardware configurations.
Planned efforts include refactoring code in the top ten critical performance areas as documented in [Terasology#5150]() for optimization potential.

Cleaning up the codebase further and improving sprint/crouch mechanics are additional key goals set by @jdrueckert (Niruandaleth).
This includes removing obsolete controller settings and graphic configurations (#5152), streamlining our codebase for improved maintainability and performance 🧹
Movement enhancements put an emphasis on elevating user interaction and paving the way for future gameplay enhancements 🏃‍♂️ 

Finally, @BenjaminAmos (BSA) will begin researching requirements for the clean separation of server and client to simplify networking in multiplayer setups.

### ⚙ Quality Assurance and Engine Refactorings

Like before, if time permits, @jdrueckert (Niruandaleth) aims to continue with quality improvements and code refactorings.
This includes configuring PMD as mandatory in our CI pipeline and reducing log noise (#4991), ensuring code quality and clarity throughout our development process. These measures are critical for maintaining high standards of software craftsmanship. 🛡️ 
In addition, exploring the purposeful usage of Java 17 features, completing the autoconfig refactorings (#4304 (comment)) and refactoring code areas such as SaveTransaction#writeChunkStores underscores our commitment to getting our codebase in order so we can focus on gameplay content work again soon. 🚀

In conclusion, as we prepare for Milestone 4, our team remains committed to laying a solid groundwork that not only enhances performance and stability but also sets the stage for future gameplay innovations. Through collaboration and community-driven efforts, we are poised to bring Terasology to new heights of functionality and user engagement. 🌟 Stay tuned!

---

_This article was partially written with the help of ChatGPT._
