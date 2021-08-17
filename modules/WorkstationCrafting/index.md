---
posttype: "module" 
title: WorkstationCrafting
description: "An extended version of crafting to allow for more advanced methods and items."
cover: "./cover.png"
tags: ["Library"]
---
# Workstation Crafting


This module adds a more detailed set of classes (compared to the Crafting module) that allow for more complicated and
detailed crafting. This is intended to be extended by other modules.

Currently under reorganization.

---

Naming convention:

- Append `Station` to the end of every workstation.
  - Here, I follow the convention of `[SkillLevel][StationName]Station`.
- Append `Process` to the end of every process name.
- Prepend `Recipe` to any crafting recipe name.

---

In order to add a new process to this module, do the following:

- Add the process definition under `assets/prefabs/processDefinitions`. 
  Use the preexisting ones as templates.
- Add a static variable containing the name of the process in `src/main/java/org/terasology/processing/WorkstationCrafting.java`
- Add this process to the process factory in `src/main/java/org/terasology/processing/system/RegisterWorkstationCraftingRecipes.java`
 (via `registerProcessFactory`).

Now, you should be able to use this process in a workstation or recipe.
