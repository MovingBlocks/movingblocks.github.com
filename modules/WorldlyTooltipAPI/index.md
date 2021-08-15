---
posttype: "module" 
title: WorldlyTooltipAPI
description: "Library module for WorldlyTooltip"
cover: "./cover.png"
tags: ["Library"]
---
WorldlyTooltipAPI
==============

Shows what you are looking at.

This module is an extension to the [WorldlyTooltip](https://github.com/Terasology/WorldlyTooltip) module, that contains the WorldlyTooltipClient system that fires GetTooltipIconEvent and GetTooltipNameEvent. 
These events are defined in this module. The WorldlyTooltipAPI module needs to be added as a dependency by all modules that want to use the WorldlyTooltip feature.
Further, the WorldlyTooltip has a dependency on the WorldlyTooltipAPI (this) module. This module essentially acts as an interface between the WorldlyTooltip module and other modules which use it.