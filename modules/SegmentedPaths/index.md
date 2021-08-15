---
posttype: "module" 
title: SegmentedPaths
description: "A library module to generically describe paths composed of segments based on bezier curves."
cover: "./cover.png"
tags: ["Library"]
---
# Segmented Paths

A module to generically describe paths composed of segments based on bezier curves. Multiple path segments can be composed to a (longer) path. The module provides means to move entities along a path.

## Planned Features

- Implement some form of mesh generation for segments
- Implement a better path caching model

## Segment

A segment is described by a bezier curve. Segments can be linked together to form a path. This is tied against a PathDescriptor for an associated EntityRef. A PathDescriptor is used to store a set of possible paths. The only restriction between segments is they have to match up with either the starting s1 or s4 point for a curve.

## SegmentEntity & SegmentMapping

A segment entity is an entity that is used to follow a segment. A segment entity will store the current heading of the entity along the associated path and path prefab. The heading is used to keep entity moving at the same direction given that the ending and start points may swap between segments. The SegmentMapping class is used by the SegmentSystem to figure out the next segment in the path. This requires returning the next entity along with the path prefab.

## Blocks

Blocks that use the segment system will have to implement the PathFamily Interface. This is used by the segment system to figure out the rotation of the segment for the associated block.

# License
  
This module is licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0.html).