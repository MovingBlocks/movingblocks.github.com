---
posttype: blog
title: "First Revival Milestone Achieved - Terasology’s Journey Continues"
cover: "./cover.jpg"
description: "Terasology Revival Milestone 1: Success unlocked! We’re celebrating our achievements and planning our path ahead. Explore it with us and join us for crafting the future together! Your enthusiasm is our fuel!"
author: "Niruandaleth & Skaldarnar"
date: "2023-09-10"
tags: ["Announcement"]
---

_Terasology Revival Milestone 1: Success unlocked! We’re celebrating our achievements and planning our path ahead. Explore it with us and join us for crafting the future together! Your enthusiasm is our fuel!_

- [🌟 The Terasology Revival Story So Far](#-the-terasology-revival-story-so-far)
- [🚀 Goals \& Challenges: A Pledge to Playability and Collaboration in Complex Terrain](#-goals--challenges-a-pledge-to-playability-and-collaboration-in-complex-terrain)
- [📜 Definition of Done: A Checklist of Triumphs](#-definition-of-done-a-checklist-of-triumphs)
- [💡 Lessons Learned and Future Outlook: A Catalyst for Growth](#-lessons-learned-and-future-outlook-a-catalyst-for-growth)
  - [🔄 Mono-Repo vs. Multi-Repo - an Age-old Debate](#-mono-repo-vs-multi-repo---an-age-old-debate)
  - [📆 Real Life vs. Voluntary Open Source](#-real-life-vs-voluntary-open-source)
  - [🩹 Addressing Long-Standing Pain Points](#-addressing-long-standing-pain-points)
  - [🌱 Exploring the Uncharted Territory](#-exploring-the-uncharted-territory)


Hey there, fellow adventurers! 
🚀 Today, we're embarking on a journey through the incredible world of Terasology, a voxel game that has captured the hearts of (mostly) developers (and some gamers alike).
But before we dive into the exciting details of Terasology's revival, let's take a step back and uncover the roots of this remarkable project.

Terasology was born in 2011 from a Minecraft-inspired tech demo by Benjamin "Begla" Glatzel while researching procedural terrain generation and effective rendering techniques.Over the years, it has been a playground for different kinds of technical experiments and proof of concepts.
But Terasology is not just a game; it's a community.
A community that values warmth, inclusivity, and respect above all else.
Within our blocky borders, harassment, attacks, and inappropriate activities find no place, fostering an environment where even the wildest dreams were sought to integrate.

Yet, like all things in life, our project went not only over peaks but also through valleys.
Our once-thriving community experienced a continuous decline in contributors and contributions over the past years.
However, amidst the challenging times, a resilient few remained, refusing to let Terasology fade into obscurity.
Why? Because we’re bound together by our unwavering love for Terasology and our belief in its untapped potential.
Our shared desire to build a thriving community-driven voxel game sparked the current revival effort.

## 🌟 The Terasology Revival Story So Far

So welcome aboard, dear fellow gooeys and gooeys-to-be, as we embark on a journey through the evolving tale of Terasology's revival.
As we reflect on the past weeks, we're thrilled to share our plans and achievements for the first step that we took on our revival path.

## 🚀 Goals & Challenges: A Pledge to Playability and Collaboration in Complex Terrain

In the early days, Terasology was known for being a tech playground for developers, filled with half-done proof of concepts aiming at realistic implementation of wildlife, weather, technology, and more.
All of us worked in a corner of the huge codebase we call our engine, focused on our own pet projects, expanding what we built while losing sight of why we built it.

With the revival, we make a solemn pledge to ourselves and our community.
We commit to transforming Terasology from a mere tech showcase into a fully playable game.
🎮 Our vision is crystal clear - to create a multiplayer game that revolves around exploration, crafting, and building.
We want to forge a tight-knit community, united by their love for these very aspects of gameplay.
We don’t want it to be just about lines of code anymore; we want to make it about shared interests and collaborative development.

Unfortunately, the complexity of and technical debt in our engine codebase forces us to focus on exploring and improving our code base rather than the world we built - for now.
We need to navigate the labyrinth we built up over years before we can get back to crafting the world of our dreams.
As a very small team the weight of seemingly overwhelming work looms over us.
We grapple with the potential for demotivation and energy drain, given the enormity of the task at hand.
We are a dedicated few, each with our own areas of expertise and interest, but we know that to conquer this mountain, we need to find a way to channel our collective energy effectively. 💪

So how did we do this? What did our first milestone truly entail?  Let's dive into the heart of it and explore the significance of our achievements.

## 📜 Definition of Done: A Checklist of Triumphs

In a collaborative effort, we upgraded Gradle to 8.2 in our engine and several other key libraries required for our project: From Gestalt and TeraNUI over CrashReporter and SplashScreen to JNBullet and JNLua this upgrade sets the stage for smoother operations and enhanced development performance. 🏎️💨
Special thanks go out to our newest gooeys _@PurityLake_ and _@soloturn_, past preparations for the upgrades by _@keturn_, and consistent support from commit over review to merge by _@BSA_.

_@skaldarnar_ and _@niruandaleth_ bid farewell to VR support and multi-world functionality, streamlining the Terasology experience to focus on what truly matters.
Some minor related removals are still outstanding and will accompany further engine refactorings in the next milestone.
In addition, GDrive support was removed from CrashReporter and the ping system underwent a significant refactoring.
Stay tuned for further streamlining and refactorings to unravel the labyrinthian corridors of our codebase and lay the groundwork for future enhancements. 🛠️

Thanks to _@pollend_ and _@darkweird_, our rendering refactor proof of concept made a significant step forward - the window came up without evaluating any OpenGL code.
Ensuring reproducibility on different machines remains a goal for the next milestone. 🖥️

Considerations of switching to a mono-repository approach sparked discussions about current and future CI design.
Together, _@Cervator_ and _@niruandaleth_ recapped and visualized the current setup.
GitHub issue [#5136] summarizes requirements based on past experiences and outlines proposed future changes.
For our next milestone, we plan to evaluate progress with these changes achieved via the ongoing CI work by _@Cervator_. 📊

All in all, our first revival milestone was not just a mere stepping stone; it was a checklist of accomplishments that we ticked off with pride and now want to celebrate together.
We’ve decided to come together for a special community event - playing Valheim, a game with many elements that we envision for Terasology, too, plus the blocks and gooeys of course. 😉
_@qwc_ will play a central role in making this possible by hosting and providing technical support for this virtual gathering.

## 💡 Lessons Learned and Future Outlook: A Catalyst for Growth

As we stand on the threshold to starting into the second revival milestone, it's a fitting time to reflect on the lessons we've learned during our journey through the first one.
These lessons help shape the scope of and expectations for our next endeavors.

### 🔄 Mono-Repo vs. Multi-Repo - an Age-old Debate

One of the most significant challenges we've encountered again is the mono-repo versus multi-repo conundrum that has no one-size-fits-all solution.
While some advocated for the simplicity of a mono-repo setup, others preferred the flexibility of multiple smaller repos.
In the end, we made a conscious decision not to merge modules into the engine repo because we realized that our main pain points stem from lack of tooling rather than the multi-repo setup.

### 📆 Real Life vs. Voluntary Open Source

In the world of voluntary open-source projects, real-life commitments often take precedence.
Balancing work, family, and other responsibilities with our passion for Terasology wasn't always easy.
However, we learned to adapt and support each other, finding ways to work harmoniously with our varying schedules and commitments.
For example, we switched our community meetings from voice chat back to pure text-based communication to allow exchanging ideas and discussing progress even if you have a toddler or a puppy roaming around you or are otherwise partially occupied.

### 🩹 Addressing Long-Standing Pain Points

One of our most gratifying achievements during our first revival milestone was the initiation of efforts to address long-standing pain points within Terasology.
These challenges had lingered for too long, and it was high time to modernize the project. 🛠️
We rolled up our sleeves and started tackling these issues head-on.
It was and still is a concerted effort to bring Terasology up to date, making it more accessible, efficient, and user-friendly.
We will continue this effort as a testament to our commitment to the Terasology community.

### 🌱 Exploring the Uncharted Territory

In our quest for improvement, we ventured into the labyrinthian depths of our code base, areas that had largely remained uncharted where few dared to tread.
And yet, we not only discovered spiders and cobwebs but also found open doors for fresh perspectives and ideas, presenting fertile ground for new contributors to join our ranks.
We actively encourage you to join our exploration of these uncharted territories: your contributions are a vital part of our growth. 👥

In conclusion, our first revival milestone served as a catalyst for growth and self-discovery.
It taught us the value of balance, the power of persistence, and the importance of embracing change.
As we look ahead to the next chapters of our journey, we do so with optimism and a renewed sense of purpose.
Together, we'll continue to shape the future of Terasology, one milestone at a time. 🌠

---

_This article was written with the help of ChatGPT._


[#5136]: https://github.com/MovingBlocks/terasology/issues/5136
