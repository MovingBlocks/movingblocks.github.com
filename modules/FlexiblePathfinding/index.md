---
posttype: "module" 
title: FlexiblePathfinding
description: "This library module allows for flexible ways of pathfinding."
cover: "./cover.png"
tags: ["Library"]
---
# FlexiblePathfinding

A plugin-based JPS pathfinder for Terasology.

This is a clone of the [original repository by Kaen](https://github.com/kaen/FlexiblePathfinding).

See also [FlexibleMovement](https://github.com/Terasology/FlexibleMovement).

# Usage

You probably want to use the nodes in `FlexibleMovement` directly.

However, if you're not actually moving anything then you can try the `PathfinderSystem#requestPath` method.

You can see the basic usage example in the
[unit test helper](https://github.com/kaen/FlexiblePathfinding/blob/master/src/test/java/org/terasology/flexiblepathfinding/helpers/JPSTestHelper.java#L99-L116)

# Hacking

Check out the unit tests. You can add a new movement type by writing a new JPSPlugin.
