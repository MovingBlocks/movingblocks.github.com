---
posttype: "blog"
title: "Lost Exploration World"
cover: "./cover.jpg"
description: "It all started with one hot sleepless night in October. I stumbled upon the Terasology project and hopped on to the org's IRC."
author: "nihal111"
ddate: "September 09th, 2017"
date: "2017-09-17"
tags: ["Project"]
---

It all started with one hot sleepless night in October. I stumbled upon the Terasology project and hopped on to the org's IRC. It took me a while to get everything running from source. After I played around for a bit, I had a glance at the issue tracker. Conveniently, I found a couple of bite-sized bugs and I sent out PR fixes by the next morning. From there to a GCI mentor last winter and a GSoC student past summer, it has been a hell of a ride.

My name is Nihal 'nihal111' Singh and this is my GSoC story.

## Road to GSoC

After having a few fixes, I played around and familiarized myself with the game. I moved on to solve a few bugs which were not so trivial. One of the bugs I solved even had a bounty attached but it turned out to be super easy and just required detective work. All this while the community was extremely supportive and encouraging, helping me on every step of the way.

The codebase was huge. Simply the Engine was so large that it could easily become intimidating for a newcomer. This, without taking into count the several dozens of modules that were under development. The number of modules is just so large that I still haven't seen them all. The community played an essential role here in making me comfortable and in solving all doubts I had.

After a memorable GCI mentor experience, dealing with a huge pile of student tasks, I was excited to switch sides and become a GSoC student. I was confused on which item to apply for. There were several project ideas explicitly floated out by the organization that required work on. I finally decided to pick an item and sort of personalize it. The idea was open-ended directed at making an all-new Exploration World and in the process tying together the so many different isolated modules we had. I decided to go forward with creating an Adventure kind of gameplay mode with puzzles and such backed by a small self-written lore.

## My Proposal

With the proposal period ending around early April, I had my proposal ready well before the deadline. This was crucial as I could get mentor feedback and tweak things here and there. The final proposal looked like [this](https://drive.google.com/file/d/0B3HM64I0M4DmYnVWUUpyQkZ2b1k/view). The proposal basically broke down whatever I planned to do into a reasonable and achievable weekly timeline. For most items, I was unsure about how time intensive they could get. The mentors recommended shifting a few items to a "Bonus" section. this turned out to be good advice, in hindsight.

## Exploration World- Improved Gameplay

That was the title of my project. It mainly involved creating an adventure-centric gameplay mode where the focus is on exploration. I decided to do this by creating several puzzle settings with hidden items to find. In addition, I was interested in working on Wild Animals. There was an existing deer that simply moved around. I decided to make animal behavior more lifelike, facilitating the addition of more animals in future. All of this gameplay is wrapped around a lore that I've written. Here is the gist of it-

_The player ends up on a desolate planet devoid of other intelligent beings. He opens up his journal to find that this was meant to be just another exploration survey of one of the potential life-supporting planets in the neighboring galaxy. However, the wormhole that he created to get here has malfunctioned and closed, leaving him stranded with no communication whatsoever. The situation seems grim and his forlorn attempts to fire up the wormhole again fail terribly. Left with no option, he wanders around to have a look at the planet that might be the last he ever set foot on. Born a survivor, he's able to hunt for food and build basic tools to keep himself alive. Soon after he starts exploring, the player finds structures that clearly represent signs of the existence of intelligent life forms. He becomes careful. Fearing his own death by the hands of the natives, he builds a few tools to defend himself. Underneath one of the structures, he discovers a secret passage. Gathering courage he goes through it. He finds a puzzle that needs to be solved to reach a treasure which seems to be concealed from the unworthy. He finds a book in the treasure chests which reveals a few secrets but creates even more mysteries._

_".. before the machines tear us apart, it's crucial to save the technology we've created for the survivors to grow and fight back, to take back what's theirs. Most of our defenses have been destroyed, our houses burned and whatever we've created is lost, but knowledge is something that doesn't die easily. If you've survived and found this book, what follows are the blueprints of the revolutionary technologies that we’ve created. To build some of these, you might require some artifacts scattered around the entire world..."_

_Soon he solves a few more and realizes that he can actually find a way back home by using the early civilization's technology to create what is known as a catapult portal that throws you across in space-time. He sets on a journey to find and solve all puzzles to find the necessary artifacts and manuscripts to build the portal so that he can travel back home._

The full lore can be found [here](https://docs.google.com/document/d/1GVmJEV2KKjqgxjtVR-_Lh7QsvRzQbfxg9qeHjimIbPg/edit#). Spoiler alert!

The GSoC results were out on the 4th of May. I remember, we had the countdown running on our IRC channel. At around 10 PM Indian Standard Time, I remember frantically refreshing the GSoC web page. It seemed to take forever to load. But when it finally did, I was delighted to find that my project had been selected. I also found out then about my mentors and other projects that had gotten selected.

## Work Period

Since my college starts around July end, my organization had agreed to accommodate my work period from May to July. Moreover, there was little need for the Community Bonding Period in my case, since I had been contributing for more than seven months.

### Phase 1- Wild Animals and Behavior

This was the first phase of my project and lasted for nearly a period of three weeks. There was a [WildAnimals module](https://github.com/Terasology/WildAnimals) in existence since quite some time. However, it only had a deer that moved around idly. The deer had a set of animations for movement, looking around and idle. The pathfinding was buggy (soon after fixed by flo). When hit it would lose health and ultimately just disappear as a glitch when it’s health reached 0. My work dealt with adding different advanced behaviors for the different types of animals would contain. The procedure of adding an animal involves, creating the 3D animal model in blender, rigging it and adding animations to it. This model is then imported in game and attached with behaviors and attributes. Since this process of model and animation creation depends upon a designer and takes a while, all the new behaviors I worked on, were added to the existing deer.

Switch to an Event-driven Behavior System- To achieve the required behavior system which involved switching between different behavioral states for an animal, with great help from flo, I was able to build a new system. This allowed for effortless switches between simply reusable behavior trees without over-complicating a simple behavior tree for an animal. This is explained in great detail [here](http://nihal111.github.io/2017/05/08/GSoC-week1-2.html).

Each behavior was stored as a package under the [AdvancedBehaviors module](https://github.com/nihal111/AdvancedBehaviors/). To add a specific behavior to an animal, it is as simple as adding a line referring to the specific Behavior Component to the animal's prefab (essentially a list of attributes). With the new system in place I was able to finally create the following behaviors:

- **Flee on hit**- Hitting the animal, makes it flee away till it reaches a safe distance from the player. 
- **Friendly**- The animal comes near the player when a player reaches in its vicinity.
- **Hostile**- The animal attacks the player if the player enters its vicinity.
- **Aggressive**- The animal attacks back when hit by the player.
- **Scared**- The animal runs away when the player approaches close, till it reaches a safe distance from the player.

The above-created behaviors can be added to several new animals. The scared behavior can be added to a chicken (which is almost ready at this point). The friendly behavior along with the flee-on-hit behavior can be attached to a dog. Here are a few videos on how the behaviors look like when applied to the deer-

<div class="row">

<div class="col-md-6">

<div class="video-container">
	<iframe width="1024" height="768" src="https://www.youtube.com/embed/unAqMHKkSC0" frameborder="0" allowfullscreen=""></iframe>
</div>

</div>

<div class="col-md-6">

<div class="video-container">
	<iframe width="1024" height="768" src="https://www.youtube.com/embed/SjuMzl-5qIc" frameborder="0" allowfullscreen=""></iframe>
</div>

</div>

</div>

Note: The flee behavior as shown in the videos was later modified such that the animal now runs away always in a direction away from the player/inflictor.

### Phase 2- Preparing the Exploration World

This phase was spread over the remaining period of my GSoC project, nearly 2 months. The work in this phase was intermittent and often intertwined with work from Phase 3, dealing with creation of traps and puzzle elements around which the Exploration World was centered. Preparation of the Exploration World involved distributed work on several different modules. 

- [Journal](https://github.com/Terasology/Journal)- There was a Journal module in existence for long, but it was almost unused. The new gameplay mode relies upon and uses the Journal heavily. The existing Journal was heavily revamped to now include recipes along with pictures etc. The content of the Journal was decoupled from content modules to a separate module that could be easily added while creating a new gameplay mode. For instance, the [Wood and Stone Crafting Journal](https://github.com/Terasology/WoodAndStoneCraftingJournal) consists of all the journal entries relevant to the modules [WoodCrafting](https://github.com/Terasology/WoodCrafting) and [StoneCrafting](https://github.com/Terasology/StoneCrafting). This can be simply activated when needed in another gameplay setting.

- [Lost](https://github.com/Terasology/Lost)- The new exploration world and gameplay template I extensively worked on over the summer is called Lost. This consists of all the assets specific to this gameplay mode and calls upon several children modules as dependencies. The World Generator "borrowed" from [NeoTTA](https://github.com/Terasology/NeoTTA) also lies here with some modification.

- [Books](https://github.com/Terasology/Books)- Most of the lore and the clues for the puzzles resides in books, specifically created for Lost.

- [Structure Templates](https://github.com/Terasology/StructureTemplates)- This module made by flo allows the creation of different structures in-game. This was used extensively to build the structures that enclose and hide the puzzle rooms. I've made several structures like Pyramids, Stonehenge and Underground Temples to achieve this purpose.

### Phase 3- Traps and Puzzles

This was arguably the most involved and fun part of my GSoC project. The exploration world revolved around the player finding hidden pieces of a portal that would take him back to his home planet. These pieces of the portal were hidden away, locked and protected by the puzzles. The puzzles consisted of several traps which served as obstacles to prevent the player from reaching the treasure. All of these elements were added under an [AdventureAssets](https://github.com/Terasology/AdventureAssets) module.

#### Trap Items

- **Swinging Blade**- A pendulum-like swinging blade of death. Come in contact with the sharp blade and it kills you. Sprint past a line of these swinging blades with timing and precision to get to the other side alive.
- **Wipe Out Surfboard**- A surfboard at the end of a rod, that revolves above a pool of lava. Miss the board, and you shall burn underneath.
- **Fireball Launcher**- A box that shoots out fireballs at different intervals and directions. Dodge past the incoming fireballs.

#### Other Items

- **Password Door**- The password door consists of a question that needs to be answered to unlock it. The answer can be given through an answer text field or a set of buttons. Give the wrong answer and you are instantly electrocuted to death.
- **Altar of Resurrection**- The altar of resurrection consists of an angel that lights up when interacted with. This serves as a checkpoint where you respawn after death.

<div class="row">

<div class="col-md-6">

<div class="video-container">
	<iframe width="1024" height="768" src="https://www.youtube.com/embed/MYmNFplY8Sc" frameborder="0" allowfullscreen=""></iframe>
</div>

</div>

<div class="col-md-6">

<div class="video-container">
	<iframe width="1024" height="768" src="https://www.youtube.com/embed/mOG_v2AkBwo" frameborder="0" allowfullscreen=""></iframe>
</div>

</div>

</div>

### Short Statistical Summary

There have been a total of 72 PRs and quite a few independent commits in the new modules I’ve created. With over 19,000 lines of code, this summer has boosted my Github stats to a whole new level.

![](http://nihal111.github.io/img/GSoCStreak.png)

All's not done. There are a few follow-ups. Some bonus items have been completed but several have barely been touched. The main timeline was followed almost as planned. There were several blockers in the way, some of which required extensive work on the Engine too.

## What more to look at?

There have been a whole lot of videos I’ve made over the summer. You can have a look at them at [my YouTube channel](https://www.youtube.com/channel/UCVDrDJDt7sI8A9Ww1FekUMQ). I have also written a set of blog posts marking the progress I made through the summers. A list of all these can be found under the #GSoC tag [here](http://nihal111.github.io/tags/#GSoC).

The final product is the Lost game. Instructions to play are as follows:-

1. Download [this release](https://github.com/MovingBlocks/Terasology/releases/download/v1.5.0/TerasologyOmega.zip).
2. Extract the Omega.
3. Move the save folder called “Lost” inside TerasologyOmega/saves to the save directory-
    - in Windows, C:/Users/name/Saved Games/Terasology/
    - in Linux, /home/name/.local/share/terasology/saves/
    Alternatively, you can run the game with the -homedir flag.
    - in Windows, run the game from cmd using a command like: Terasology.x64.exe -homedir or add the -homedir flag to the target field of the shortcut to the exe file.
    - in Linux, modify the run_linux.sh script so that it has a -homedir flag at the end, like so: java -Xms128m -Xmx1536m -jar libs/Terasology.jar -homedir
4. Launch the game using the script or the .exe file.
5. Select Singleplayer -> Lost and load the saved game.

## Future improvements

Although I have checked off most of my primary targets from the proposal. There are quite a few things that need work on-

1. Some of the traps like the Swinging Blade work well only in Single Player. This is because the Movement Prediction works quite differently on the server side. The `CharacterImpulseEvent` triggers differently even with a little lag.  
2. Traps like the Wipe Out, require the player to move constantly along with the surfboard. There have also been instances when a collision is not detected between the player and the surfboard. Again something to deal with the Movement Prediction and Physics engine.  
3. On the Gameplay side, I've attempted to make interesting short riddles for the three treasure locations, however they get boring very fast. The player might feel it is too much effort to solve a text based riddle. It can be difficult to strike the right chord while making riddles and clues that are both short, engaging and require the player to think.  
4. The Portal upon construction does nothing yet. Well, it is supposed to take you back to your home planet. But I guess we could display a "Game Over" dialog or somehow bring up the Credits screen.  
5. The Phase 1 work of my project on deer has not been included in the final executable. The existing spawner in the WildAnimals module requires to be worked on and improved.  
6. The new behaviors created are all applied to deer as a placeholder for different animals. This needs to be tried out with different animals as soon as models and animations get ready. New behaviors can be created under the existing setup quite easily too.

Some of these might be fixed by a long overdue movement refactoring. With Tyler Thompson's Scenario module developed alongside in [another GSoC project](https://thompsontyler.github.io/gsoc/2017/08/25/scenario-gsoc.html), the Lost module serves as an example of how a gameplay scenario can be made.  
With the completion of this GSoC project making adventure assets like locked doors, traps, resurrection statues etc are now a lot more easier. Creation of more such things can probably serve as one of the tougher GCI tasks later.

## Wrap Up

My favorite part of the summer was doing something I like and something I'd have done anyway and at the same time availing the stipend and prestige of having done a GSoC.

I would like to thank all my mentors. My primary mentor, Skylar ‘skysom’ Sommers, for replying always within a split second (save for the times when he forgets to hit the Send button :P). Florian ‘flo’ Köberle, who was my secondary but went out of his way and functioned effectively as my primary. I got to learn a lot from flo regarding various aspects of the game. It would have been impossible to complete my project without his aid. Xavier ‘xtariq’ Tariq, who was also my secondary mentor, helped me whenever I needed him. I’d like to especially thank Rasmus ‘cervator’ Praestholm here. Had he not been there that night in October, welcoming me on IRC and helping me set up my codebase, maybe I would have given up, moved on and never have done GSoC in the first place.

All in all, it has been a thrilling summer. By this time I am familiar with a good part of the game’s codebase. I would love to continue contributing, albeit in different capacities. Let’s hope real life doesn’t get in the way too much. Also, GCI is almost here and another storm’s coming!

Here's one of the snaps from one of the multiplayer play test sessions-

![](./multiplayerPlayTest.jpg)

---

> About the author:  
> Name: Nihal Singh (nihal111)  
> From: Indian Institute of Technology, Bombay  
> Social: [Github](https://github.com/nihal111) | [Blog](http://nihal111.github.io)  
