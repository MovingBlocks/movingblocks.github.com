---
posttype: "module" 
title: SubstanceMatters
description: "Adds systems for tracking the composition of items.  Also adds world generation for some core ores if OreGeneration is enabled."
cover: "./cover.png"
tags: ["Library"]
---
# Substance Matters

## Design Goals

- Have a central place to put definitions for common substances.
- Define default ore generation in the world.
- Create multiple items from one texture, with all of these items being easily identifiable from one another.
- Be able to specify what an ore block is made out of and create items out of that ore that represent that substance.
  So when an iron block is melted, an iron looking nugget is produced.
  This iron nugget could then make another item that looks like iron.

## Substances

Substances hold attributes that allow creation of materials from a single image but look different from materials made of different substances.

### Basic Prefab Usage

```json5
// TestModule/assets/prefabs/copper.prefab
{
    "substance": {
        "name": "Copper",
        "hue": 20,
        "saturationScale": 1,
        "brightnessScale": 1
    }
}
```

The name of the substance will be prepended to the material name.
So if you have a "Nugget" material made of "Iron" substance, it will be named "Iron Nugget".
Hue is the color that this substance use on a material.
Saturation scale and Brightness scale allow you to further tweak the appearance of the color tinting without changing the intent of the original artwork.

## Materials

Materials are made out of substance.
You would add a `MaterialItemComponent` to an item and specify a texture to use.
Then when a `MaterialCompositionComponent` is added, the primary substance (the substance with the greatest value) will be used to tint the texture to look like that substance.

### Basic Prefab Usage

```json5
// TestModule/assets/prefabs/nugget.prefab
{
  "parent": "engine:iconItem",
  "Item": {
    "icon": "TestModule.Nugget",
    "stackId": "TestModule:Nugget"
  },
  "DisplayName": {
    "name": "Nugget"
  },
  "MaterialItem": {
    "icon": "TestModule.Nugget"
  }
}
```

## Testing out your materials

Use the `giveMaterialItem` command to create materials to test with.

Put this into your in-game console to create copper nuggets with the above prefabs: 

```
giveMaterialItem nugget copper 10
```

This item will look like a nugget,  and have 10 copper substance attached to it.


## Material Composition

A list of the substance contents of an item.
Not intended to be added directly to a prefab with JSON.
Can be used to determine what substances are on an item and act accordingly.

# Substance Matters for Fluids

### Fluid Substances

```json5
// TestModule/assets/prefabs/poison.prefab
{
    ...
    "fluidSubstance": {},
    "somePoisonAttribute": {
        "deadly": "very yes"
    }
}
```

### Material Fluid Containers

```json5
// TestModule/assets/prefabs/fluidBucket.prefab
{
  ...
  "MaterialFluidItemContainer": {
    "fluidIcon": "TestModule.Nugget"
  }
}
```

