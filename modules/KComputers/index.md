---
posttype: "module" 
title: KComputers
description: "Adds computers powered by the Kallisti library and compatible with OpenComputers."
cover: "./cover.png"
tags: ["Library","Asset"]
---
KComputers
=================

Modular computers, powered by [Kallisti](https://github.com/Terasology/Kallisti)!

Early WIP - does not run in a normal game environment yet.

To run this module with workarounds use either:

* The `gradlew permissiveNatives` task to run the game with permissive security and an extra hook to load native files
* The "TerasologyPC (permissive security) run config in IntelliJ, after setting up the natives path in a variable
  * Go to "Path Variables" under IntelliJ's settings, create `TERASOLOGY_NATIVES` and set it to the absolute path of the `natives` dir
* From a game zip you'll need to execute Java with two extra arguments, `-Djava.library.path=<path to natives>` and `-permissiveSecurity` 
  
To get the hardware in-game:

* `give display`
* `give computer`
* `give ROMOCBios`
* `give CPULua53`
* `give GPUOCType`
* `give FloppyDiskOpenOS`
* `give RAM256 5`

Place the computer and display blocks adjacent to each other in the world.

Open the computer block with `e` and plop all the hardware in filling in the leftover space with memory modules. Hit the "Activate" button

See https://github.com/MovingBlocks/Terasology/pull/3937 for some related discussion about natives. More work is needed to allow KComputers to run with security on and no special hooks for the [JNLua](https://github.com/MovingBlocks/JNlua) natives
