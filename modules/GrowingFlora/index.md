---
posttype: "module" 
title: GrowingFlora
description: "Module providing mechanisms for growing plants (trees, bushes, crops)"
cover: "./cover.png"
tags: ["Library"]
---
GrowingFlora
============
**GrowingFlora** is a Terasology module that generate and grow plants organically over time.

> ***If you are interested on making the assets for dynamic plants, you might want to check out [PlantPack](https://github.com/Terasology/PlantPack)***

World Generation
-------
**GrowingFlora** not only handles the organic growth of plants, but also the generation of it. You can find the world generation code for the plants in `src/main/java/org/terasology/gf/generator`

Grass Growth
------------
Grass growth/spread is also handled by GrowingFlora. This allows a block of grass to spread to a dirt block and turning it into a grass block. You can find the grass growth/spread code in `src/main/java/org/terasology/gf/grass`

Trees
-------
Trees generation, trees growth, and saplings are also handled by GrowingFlora.

Trees are divided into 3 main parts.
 1. Branch
 2. Leaf
 3. Trunk

Trees can have varying shapes. Shapes that currently exist can be found in `assets/prefabs/shapes`.

**TreeCutDamage** is considered as a physical damage by the engine, it also have a directPickup set to true. You can find more information about this damage type in assets/prefabs/damage

You can find the code for trees management in `src/main/java/org/terasology/gf/tree`