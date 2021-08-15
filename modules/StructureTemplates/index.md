---
posttype: "module" 
title: StructureTemplates
description: "A module that adds 'structure templates' which can be used to spawn whole structures for faster building."
cover: "./cover.png"
tags: ["Asset"]
---
#  Structure Templates

## About this repository.

Structure Templates is a module for Terasology that allows for the creation of so called "structure templates".


## What are structure templates

Structure tempaltes describe a structure. This structure can then be placed multiple times.

The structure templates can either be obtained as item ingame and just be used for quicker building.

However structure templates can also be used exported to json files (terasology prefabs) and used by modules to generate for example a random dungeon with multiple rooms. The module [Gooey's Quest](https://github.com/Terasology/GooeysQuests) does for example exactly that. A single structure template can spawn a complete random dungeon as structure templates can also trigger the spawning of further structure templates.

Structure templates can not only spawn blocks but for example also entities. However the spawning of more than just blocks and chests with items need currently some manual extension of the json file. For example the dungeon generating structure templates of  [Gooey's Quest](https://github.com/Terasology/GooeysQuests) also spawn skeletons.

The structure template framework can also be easily extended to add further spawn actions and conditions.

## How to view/edit existing structure templates ingame

It is possible to place structure templates in a edit mode. In that edit mode placeholders will be placed at locations where for example normally other further sturcture template spawning would have been triggered normally. To do this you first need to obtian the toolbox item ![with red toolbox icon](assets/textures/Toolbox16x16.png) via the command `give toolbox`. This item opens on activation a dialog which allows you to obtain items (Icon: ![with T icon](assets/textures/StructureTemplateOrigin.png)) that spawn structure templates in edit mode. However to actually see structure templates ingame you need to activate first a moduel like [Gooey's Quest](https://github.com/Terasology/GooeysQuests) that contains structure templates. 

Once you placed a structure template a white block with a black T (Icon: ![T](assets/textures/StructureTemplateOrigin.png)
) will  appear at the so called "origin" of the structure template.
This structure template orign block can be activated to open a interaction dialog with the structure template.

To add a block to that template you would then activate the option "Record block addition" in that dialog. This will make a outline appear around the blocks of the structure template. Whenever you place a block, the template instance you place will now know that this block belongs to the structure. If you remove a block whilte "Record block addition" is active then the block will be also be removed from the template.

If you are making an underground room it is a good idea to place the structure template you are editing underground. Then you can activate the option "Record block removal". With this option active any block removal you do will count result in the new air block being added to the template. Any block placement will result in the air block being removed from the structure template.

If both "Record block addition" and "Record block removal" have been activated then any block addition and removal will be added to the structure template.

A quick way to extend underground rooms is the "Wall replacer" tool that can also be obtained form the toolbox. It allows you to replace a wall with another block including air. If you have the option "Recond block addition" active then those changes will be automatically recorded too. Independent if you add actual blocks or air.

When you want to try out your modifications to the tempalte then you can use the "Create Structure Spawner" button in the structure template origin dialog to give yourself a item that spawns the structure template (in non edit mode).

When you are happy with the changes you can use the "Selected -> Clipboard" button in the structure template origin dialog in order to copy a text string in json format to the clipboard that represents the structure template. This json can then be pasted in the prefab file that represents the structure template. By however careful to check what changes you made as existing structure template components may contain additional components that can not yet be represented by the template in editing mode.

One part that can not be represented yet are spawn conditions for the structure template. For example you can make structure templates be only placeable underground so that a randomly generated dungeon does not generate rooms above the surface. To get the json that represents a "is underground" condition for a structure template click on the `Copy "is underground" condition` button. This json needs then to be added manually to the prefab file. If you make an underground room larger you probably also need to regenerate this underground condition so that it also checks that the added parts are underground.


## How a single structure template can spawn a random dungeon

Structure templates can spawn other structure templates. So it is possible to make a template that "represents a dungeon entrance" and have that template trigger the spawning of a randomly chosen cooridor structure template. This cooridor structure template then might trigger the spawning of one or more other coorditor structure template. Thus recusivly a huge random dungeon can be generated.

To make a structure template spawn another structure template you need to place a structure placeholder block within your template and then activate it to specify what structure template type shall be spawned.

Each structure template can belong to a structure template type that gets described itself by a prefab with `StructureTemplateType` component. The sturucture template type and the spawn rate can be specified via the structure template origin block. The larger the spawn rate value is, the more often it will be picked. If you want your structure tempalte to have an average spawn rate you should set the spawn rates value to 100. A structure template with the spawn reate 200 gets picked twice as often as one with the spawn rate 100. A structure template with the spawn rate 50 gets only picked half as often as one with the spawn rate 100.

No further registering of structure templates is necessary. You just need to add a prefab file for you new structure template and it will automatically be used whenever another structure template wants to spawn a structure template of its type.
