---
posttype: "module" 
title: Machines
description: "A library for machines"
cover: "./cover.png"
tags: ["Library"]
---
## Machines
A module that provides the infrastructure to easily make machines for processing or assembly of materials.

See the forum for discussion: http://forum.terasology.org/threads/machines.938/

## Entity Network
- A set of components and systems to join entities together in a group.  These groups can then be queried so that interactions between joined entites can be orchestrated.

[Entity Network Readme](src/main/java/org/terasology/entityNetwork/README.md)

## Fluid
see Fluid

## Fluid Transport
- Tanks that can be interacted with by containers of fluid (like a bucket).
- Pipes that simulate gravity and let fluid naturally flow from elevated tanks to lower tanks.
- Pumps that input power to lift fluid to elevated tanks.

## Item Transport
- Ejection/extraction of items to/from adjacent inventories

## Machines
- A default UI implementation for an inventory based workstation process that allows a single visual extension
- A system to simplify setup of a block to be a machine. It will automatically add an inventory, slot mappings, and extension of the default UI
- Surface Placement block family to assist connecting devices in the right direction

## Mechanical Power
- Uses the EntityNetwork submodule and PotentialEnergyDevices module to enable transfer, storage, and production of energy

[Mechanical Power Readme](src/main/java/org/terasology/mechanicalPower/README.md)
