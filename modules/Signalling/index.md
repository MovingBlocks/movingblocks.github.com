---
posttype: "module" 
title: Signalling
description: "Mod containing blocks that send signals to other blocks"
cover: "./cover.png"
tags: ["Library","Asset"]
---
# Signalling
This module adds blocks that send signals to other blocks. The blocks included in this module allow for basic logic gates to be created in game, using cables, inputs, gates, and outputs. A signal strength system is used where the strength of a cable's signal decreases as it grows longer. Signal strengths go on a scale from 1-10, and can also be infinite.

## Blocks/Items added
 * **Screwdriver** - Used to rotate blocks
 * **Cable** - Used to transmit signals
 * **Logic Gates** - AND, NAND, OR, and XOR gates function using their respective operations. For information on what these operations are look [here](http://whatis.techtarget.com/definition/logic-gate-AND-OR-XOR-NOT-NAND-NOR-and-XNOR).
 * **Set-Reset Gate** - Signal output can be toggled using 2 different sides
 * **Delay Gate** - Delay signals; self explanatory
 * **Transformer** - Increases signal strength by 1 unless it is already 10 or infinite
 * **Button** - Provides a short pulse with infinite signal strength when pressed
 * **Pressure Plate** - Produces infinite signal strength when a player stands on it
 * **Limited Switch** - Produces a togglable signal with a strength of 5
 * **Switch** - Same as limited switch but with infinite strength
 * **Lamp** - Lights up when powered

## Contribution
In order to contribute to this repository, fork it and submit a pull request with your changes. There is currently no set process for adding a block, although the basic structure is that it must have a .block and .prefab file following a similar format to the existing ones. Gates also must use SignalGateComponents. Behaviors must be defined in the SignalSwitchBehaviorSystem class.
