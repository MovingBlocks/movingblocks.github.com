---
posttype: "module" 
title: Climbables
description: "This module creates additional climbable blocks and placement modes for them."
cover: "./cover.png"
tags: ["Library","Asset"]
---
## Climbables

A module that adds climbable blocks that can be placed in various ways. It offers a better way to reach heights or lows without the need of ladders.

Block added until now, commands to get them and role:
- Scaffold (give scaffold) = Climbable stackable structure. Can only start from a corresponding support;
- Scaffold Support (give scaffoldsupport) = Normal Block. Used to start stacking scaffolds;
- Pole (give pole) = Climbable roping structure. Can only start from a corresponding support;
- Pole Support (give polesupport) = Normal Block. Used to start roping poles;

A group of scaffolds or ropes form a structure. Breaking any part of it will cause the remaining structure (away from the source) to be destroyed. Breaking the support will cause the whole thing to fall.

More advanced placing mechanics (structural integrity and such) will be added once movement will be refactored.