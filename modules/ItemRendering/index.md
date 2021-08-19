---
posttype: "module" 
title: ItemRendering
description: "This library module allows to render and animate items when thrown into the world."
cover: "./cover.png"
tags: ["Library"]
---
# RenderItemComponent

Add this to entities and they will display in the world.  This rendered version's location becomes a child of the owning entity (like the containing inventory). 

# CustomRenderedItemMeshComponent

When the entity gets an RenderItemComponent added, it will use this mesh and material instead of the default block or item.

## Minimal Usage on a prefab

```java
{
    "CustomRenderedItemMesh" : {
        "mesh" : "UriOfYourMesh",
        "material" : "UriOfYourMaterial"
    }
}
```


# AnimateRotationComponent

When the entity gets a AnimateRotationComponent added, it will rotate continuously.

## Minimal Usage on a prefab

```java
{
    "AnimateRotation" : {
        "yawSpeed|pitchSpeed|rollSpeed" : <float value in rotations per second>
    }
}
```

## Defaults

```java
{
    "AnimateRotation" : {
        "yawSpeed" : "0",
        "pitchSpeed" : "0",
        "rollSpeed" : "0",
        "isSynchronized" : "false"
    }
}
```

# AnimateBounceComponent

When the entity gets a AnimateBounceComponent added, it will bounce continuously.

## Minimal Usage on a prefab

```json
{
    "AnimateBounce": {
        "maxHeight" : 10.0,
        "period" : 10.0
    }
}
```

A combination of AnimateBounceComponent and AnimateRotationComponent can be [watched on YouTube](https://www.youtube.com/watch?v=HhyODzw36bA).
