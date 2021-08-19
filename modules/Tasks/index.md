---
posttype: "module" 
title: Tasks
description: "A module to add some questing features to the game."
cover: "./cover.png"
tags: ["Augment"]
---
Tasks Framework
===============
This is the tasks framework. It currently only contains features for making and playing through quests.

Activate the quest HUD by pressing `K`.

A typical setup is illustrated in the [QuestExamples](https://github.com/Terasology/QuestExamples) module.

The basic idea is as follows:

* A quest point entity provides quest items to players.
* A quest item is activated by the player.
* The quest HUD documents the list of tasks to achieve.
* When all tasks are complete, the quest is complete.

[Sneak Preview: Quest System](https://www.youtube.com/watch?v=GMoOZ1CvyhE).


Developing
------------

Quest Points need to have a `QuestListComponent` that enumerates available quest items.

Quests are stored in the form of prefabs with a `QuestComponent` that is comprised by a list of tasks.

Beacons (points the player has to go to) are identified by `QuestBeaconComponent` ID.


### License

This module is licensed under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).
