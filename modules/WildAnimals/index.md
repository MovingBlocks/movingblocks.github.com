---
posttype: "module" 
title: WildAnimals
description: "Contains a deer and some other placeholder deer variants. Spawned with `spawnPrefab deer` and similar"
cover: "./cover.png"
tags: ["Library"]
---
![The Wild Animals](banner.png "The Wild Animals")

`WildAnimals` is intended to be used as dependency and not as a standalone content module. 
The idea is that content modules can decide on the rules when and where to spawn the wild animals.

So far it contains four animals with very simple AIs.
* Deer
* Crab
* Chicken
* Bat

Each of them can be spawned manually using the `spawnPrefab <animalname>` command, e.g. `spawnPrefab deer`.