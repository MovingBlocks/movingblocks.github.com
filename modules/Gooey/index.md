---
posttype: "module" 
title: Gooey
description: "Introduces Gooey's 'odd' cousin to the game. Say hi, just don't get too close .."
cover: "./cover.png"
tags: ["Asset"]
---
<p align="center">
<img src="./banner.png" alt="Gooey" />
</p>

# Gooey

An asset module for our beloved gooeys.
It provides the models, materials and textures for both Gooeys and their weird, manic cousins the MawGooeys.

## Gooeys

The Gooey glTF model can be referenced in prefabs with a `skeletalMesh` as `Gooey:gooey`.
```json5
  "skeletalMesh": {
    "mesh": "Gooey:gooey"
  }
```

The model currently comes with one animation only, which is the `ArmatureAction`.
This animation can be referenced in a `skeletalMesh` with an `animationPool` as `Gooey:gooey#ArmatureAction`.
```json5
  "skeletalMesh": {
    "mesh": "Gooey:gooey",
    "animationPool": [
      "Gooey:gooey#ArmatureAction"
    ],
    "loop": true
  }
```

There is a bunch of textures and materials provided that allow for gooeys in many colors of the rainbow.
The materials can be referenced in a `skeletalMesh` as `Gooey:gooeySkin<color>` with `<color>` being the color name, e.g. "Blue".
```json5
  "skeletalMesh": {
    "mesh": "Gooey:gooey",
    "material": "Gooey:gooeySkinBlue"
  }
```

The material and texture assets are named based on the [HTML Color Names](https://htmlcolorcodes.com/color-names/) of the respective color code of the color used in the texture.

## MawGooeys

The MawGooey glTF model can be referenced in prefabs 

The Gooey glTF model can be referenced in prefabs with a `skeletalMesh` as `Gooey:mawgooey`.
```json5
  "skeletalmesh": {
     "mesh": "Gooey:mawgooey"
   }
```

The model comes with four different animations:
- Attack
- Death
- IdleFinal
- Walk

These animations can be referenced in a `skeletalMesh` with an `animationPool` as `Gooey:mawgooey#<animation>` with `<animation>` being the animation name, e.g. "Walk".
```json5
  "skeletalMesh": {
    "mesh": "Gooey:mawgooey",
    "animationPool": [
      "Gooey:mawgooey#Walk"
    ],
    "loop": true
  }
```

Currently, there are three different color variants provided: Green, Purple, and Red.
The materials can be referenced in a `skeletalMesh` as `Gooey:mawgooeySkin<color>` with `<color>` being the color name, e.g. "Red".
```json5
  "skeletalMesh": {
    "mesh": "Gooey:mawgooey",
    "material": "Gooey:mawgooeySkinRed"
  }
```

The material and texture assets are _not_ aligned with any "official" colors.
