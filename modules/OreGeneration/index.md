---
posttype: "module" 
title: OreGeneration
description: "A plugin system for adding randomized ore generation to the world"
cover: "./cover.png"
tags: ["World","Library"]
---
# Ore Generation

A plugin system for adding randomized ore generation to the world

## Pocket Ore Generation

All **pocket ore generation** variants share the base properties defined in the base _pocket ore-generation component_ [`BasePocketOreGenComponent`](/src/main/java/org/terasology/oreGeneration/components/BasePocketOreGenComponent.java).
Default values can be found in the component definition.

### Density-based generation

Pocket ore generation is small clumps of blocks that occur underground.
The _pocket density ore gen component_ [`PocketDensityOreGenComponent`](/src/main/java/org/terasology/oreGeneration/components/PocketDensityOreGenComponent.java) provides additional properties.
Default values can be found in the component definition.

```json5
// Minimal definition, e.g, in 'CoalOreGen.prefab'
{
    "OreGenDefinition":  {},
    "PocketDensityOreGen": {
        "block": "CoreAssets:CoalOre",  // What block will be placed
        "frequency": 1                  // How often this pocket will happen in 10 vertical blocks in the region
    }
}
```

### Depth-based Generation

This pocket ore gen is contained within a certain range of depth underground.
The _depth pocket density ore gen component_ [`DepthPocketOreGenComponent`](/src/main/java/org/terasology/oreGeneration/components/DepthPocketOreGenComponent.java) provides additional properties.
Default values can be found in the component definition.

```json5
// Minimal definition, e.g, in 'CoalOreGen.prefab'
{
    "OreGenDefinition":  {},
    "DepthPocketOreGen": {
        "block": "CoreAssets:CoalOre", //  What block will be placed
        "frequency": 1,                // How often this pocket will happen in 10 vertical blocks in the region
        "minDepth": 4,                 // The minimum depth that this pocket will occur
        "maxDepth": 80                 // The maximum depth that this pocket will occur
    }
}
```

## Veins Ore Generation

The **veins ore generation** creates a round central "mother lode" with branches radiating in all directions.
Branches may twist and turn, and may fork to create a more tree-like structure.
All veins-based or generators share the properties defined in the base _veins ore-generation component_ [`BaseVeinsOreGenComponent`](/src/main/java/org/terasology/oreGeneration/components/BaseVeinsOreGenComponent.java).
Default values can be found in the component definition.

### Density-based Generation

Restricts the generation of veins based on the _density_.
The _density-based veins ore-generation component_ [`VeinsDensityOreGenComponent`](/src/main/java/org/terasology/oreGeneration/components/VeinsDensityOreGenComponent.java) defines additional properties.
Default values can be found in the component definition.

```json5
// Minimal definition, e.g, in 'IronOreGen.prefab'
{
    "OreGenDefinition":  {},
    "VeinsDensityOreGen": {
        "block": "CoreAssets:IronOre",  //  What block will be placed
        "frequency": 1                  // How often this ore gen will happen in 10 vertical blocks in the region
    }
}
```

### Depth-based Generation

Restrict the generation of veins to a specific range of depth underground.
The _depth-based veins ore-generation component_ [`DepthVeinsOreGenComponent`](/src/main/java/org/terasology/oreGeneration/components/DepthVeinsOreGenComponent.java) defines additional properties.
Default values can be found in the component definition.

```json5
// Minimal definition, e.g, in 'IronOreGen.prefab'
{
    "OreGenDefinition":  {},
    "DepthVeinsOreGen": {
        "block": "CoreAssets:IronOre",  //  What block will be placed
        "frequency": 1,                 // How often this ore gen will happen in 10 vertical blocks in the region
        "minDepth": 4,                  // The minimum depth that this pocket will occur
        "maxDepth": 80                  // The maximum depth that this pocket will occur
    }
}
```
