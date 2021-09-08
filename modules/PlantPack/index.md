---
posttype: "module" 
title: PlantPack
description: "Provides basic plant assets"
cover: "./cover.png"
tags: ["Asset"]
---
PlantPack
=========
A collection of trees and dynamic plants which grow over time or change in other ways.


Plants
------
The plants are divided into 2 types:
 1. Crops
 2. Trees

**Crops** are able to grow (change texture) over time and they can have several stages of growth. Crops are similar to a normal block.
**Trees**, however, do not have the capability to slowly grow over time that crops have. They are usually a structure, composed of many blocks.

Creating a New Crop
=================

*For examples of existing crops, check out `assets/blocks/crop` & `assets/prefabs/crop`*

Prefab File
-----------

To start making a new crop you need to decide how many stages of growth you want to have, then create a prefab file to indicate those stages. 

Here is an example of a crop with 7 stages:
```json
{
  "ChangingBlocks": {
      "blockFamilyStages": {
          "PlantPack:Corn1": 30000,
          "PlantPack:Corn2": 30000,
          "PlantPack:Corn3": 30000,
          "PlantPack:Corn4": 30000,
          "PlantPack:Corn5": 30000,
          "PlantPack:Corn6": 30000,
          "PlantPack:Corn7": 30000
      },
      "loops": false
    }
}
```
Each line in `blockFamilyStages` indicates a growth stage for the crop, and the number next to it represents the growth time it requires. The `loops` property indicates whether or not the plant should loop the growth stages after the initial growth finishes.

After you finish making the stages, you MUST remember the name of those stages so that you can create the .block file for each stage.

Block File
----------
After you finished the prefab file, you need to create a .block file for each growth stage. All .block files are located in `assets/blocks/crop`.

Here is an example of a .block file for a crop:

```json
{
    "author": "metouto",
    "basedOn": "CoreAssets:plant",
    "entity": {
        "prefab": "PlantPack:Corn",
        "keepActive": true
    }
}
```

Make sure you type-in the prefab in the .block file in accordance to the name of the prefab that you made.

Texture Files
-------
After creating the prefab and block files, you also need to create the texture for each of the crop growth stages. All texture files (.png) for crops are located at `assets/blockTiles/crop/`. Make sure you name these texture files in accordance to the growth stages that you want to assign them to.


Developing With PlantPack
=======
**PlantPack** assets can bring a good addition to world generation modules, you can utilize the plants that this module have to *spice up* the world that your module generates.

A good example would be, [AnotherWorld](https://github.com/Terasology/AnotherWorld/) module that works together with [AnotherWorldPlant](https://github.com/Terasology/AnotherWorldPlants) that utilizes PlantPack assets.
