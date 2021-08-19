---
posttype: "module" 
title: FallingBlocks
description: "Detects groups of blocks disconnected from the ground to let them fall"
cover: "./cover.png"
tags: []
---
# Falling Blocks

This module detects groups of blocks that have become disconnected from the ground, and moves them down. More specifically, it counts as solid those blocks which have the attachmentAllowed attribute (although this is likely to change in the future), and a solid block is disconnected from the ground if there is no path from it to an unloaded chunk entirely through solid blocks. Blocks which have the LevitatingBlockComponent are also able to support themselves and other blocks without a connection to the ground.

## Internals

It uses an octree data structure to keep track of connected components of solid blocks, which is generated fresh every time the world is loaded rather than being saved. Because of its sparsity, the data structure is smaller than a block data field. The integrity of the datastructure can be verified using the fallingBlocksDebug command. In multiplayer, the module only runs serverside.

As the updates to the datastructure may take a while, particularly when loading new chunks, that all happens on a separate thread. Block groups will only fall once all of the updates are finished, so there may be a delay between the world loading and the module's effects becoming visible. You can check whether the updates are finished with the fallingBlocksStatus command.
