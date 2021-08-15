---
posttype: "module" 
title: ChangingBlocks
description: "Allows blocks to become other blocks over time, or when their environment changes"
cover: "./cover.png"
tags: ["Library"]
---
ChangingBlocks
==============

For supporting blocks that change through some sort of defined cycle, like crops, dust build-up, or just arbitrarily through configured options

Provide a list of block names and the game-time-in-milliseconds until the next block in the list is used.
When the last block is reached, either loop back to the first one, or send an OnBlockSequenceComplete event.

Example component to add to a prefab:

	"ChangingBlocks" : {
		"blockFamilyStages" : {  
		             "Crops:Corn1" : 30000,
								 "Crops:Corn2" : 30000,
								 "Crops:Corn3" : 30000,
								 "Crops:Corn4" : 30000,
								 "Crops:Corn5" : 30000,
								 "Crops:Corn6" : 30000,
								 "Crops:Corn7" : 30000 },
		"loops" : false
	}

Example prefab to add to each block:

    "entity" : {
        "prefab" : "Crops:Corn",
        "keepActive" : true
    }
