---
posttype: "module" 
title: ItemPipes
description: "This library module allows to transport items via pipes."
cover: "./cover.png"
tags: ["Library"]
---
# ItemPipes
**ItemPipes** is a Terasology module that adds item transport system based on pipelines. ItemPipes are useful for automation purposes - this module lets you transport items without your involvement.

## Items
  - **Pipes** are the base of this module. They are used to transport items. You can connect them together with other pipes to make pipelines and with blocks such as Suction Blocks or chests.
  - **Suction Block** is used to input items into pipes. Suction Block attracts all items laying on the ground within 5 block radius to suck them in. If more than one pipe is connected to a Suction Block, it will put the items randomly into one of the connected pipes.
  
_Check out **[AdditionalItemPipes](https://github.com/Terasology/AdditionalItemPipes)** for more interesting items using pipe system!_

## Getting started
_Note: The only way to obtain items provided by this module is to use `give <id>` command. To execute a command, open the console with <kbd>F1</kbd> key, type in a command and press <kbd>Enter</kbd>._

1. Create a new world with the ItemPipes module enabled.
2. Execute `give basicpipe` command to get some Pipes, and `give suction` to get some Suction Blocks.
3. Your inventory should also have a chest in it. If it doesn't, execute `give chest` to get it. Put all of the three mentioned items into the hotbar and place them in a way like on the screnshot below.
4. Remove all items from the chest (if there were any) and go infront of the suction block.
5. Drop an item on the suction block and watch it go through the pipe.
6. When the item in the pipe disappears, open the chest and voila - here's the item you've dropped!
  
## Creating pipelines
To create a pipeline just place two pipes next to each other. They will connect together with each other and make a pipeline. Every pipe is able to have up to 6 connections! If an item comes to a pipe which has more than two connections, it will go further into one of the other connected pipes randomly.

## Integration with chests
ItemPipes allows the players to connect pipelines with chests to input items into them.

![](https://user-images.githubusercontent.com/28996462/34639790-e94f8c18-f2e6-11e7-8c66-12589b3416f2.png)

_A setup like this will put every dropped item in Suction Block's proximity into the chest._
