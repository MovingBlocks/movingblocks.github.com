---
posttype: "module" 
title: GooeysQuests
description: "Planned content: A character called Gooey will appear. He offers you exciting and dangerous quests. However, be warned: He might modify your world... and not in a way you like!"
cover: "./cover.png"
tags: ["Gameplay"]
---
#  Gooey's Quests

A module for Terasology that causes a Gooey to randomly spawn around the world, offering the player quests that create structures.

## Getting Started

- Start a game in a world with mountains, with GooeysQuests activated.
- Walk around until you find a character named Gooey that will ask you something.
- So every time Gooey adds a structure, you will see something new.
- Right now there are two available structures, the dungeon and the dwarf hall, but they have different combinations, so every time gooey add the structure, you will see something new.
- But be careful - the changes Gooey makes to the world may impact any existing builds, be sure the area is clear!

## Adding more structures

If you want to add a new structure, first you have to create the structures templates that will form the structure. Then you will have to create two java classes: a component and a system, typically in the folder `/src/main/java/org/terasology/gooeysQuests/quests`

##### Naming conventions:
- Add the name of your structure at the beginning of the name of each structure template that you create
- The format for java class names is: `<YourStructure>QuestComponent` and `<YourStructure>QuestSystem`

## Screenshots

![Gooey in-game](https://user-images.githubusercontent.com/33598488/34733694-92fda2b6-f569-11e7-9d65-a324abc9c5f2.jpg)

![GooeysQuests UI](https://user-images.githubusercontent.com/33598488/34733696-9530241e-f569-11e7-97ad-9e973f0647b6.jpg)

## Credits

A drawing of a "gooey" made by SuperSnark was the inspiration for Gooey, the main character of this module.

