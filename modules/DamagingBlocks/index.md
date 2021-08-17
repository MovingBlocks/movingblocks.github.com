---
posttype: "module" 
title: DamagingBlocks
description: "Allows players to take damage from blocks."
cover: "./cover.png"
tags: ["Library"]
---
# DamagingBlocks

## Goal: 
To allow modders to create blocks which cause damage to players upon physically touching them or destroy objects which land on the blocks (i.e. Lava or Cacti)

## Usage:

The DamagingBlocks module uses a component and a system. For more information regarding components and systems, please check out https://github.com/MovingBlocks/Terasology/wiki/Entity-System-Architecture

Essentially, the custom block's prefab would have a DamagingBlockComponent attached and the DamageSystem would apply the damage or destroy the item.

## DamagingBlockComponent

Defines the rate and amount of damage which would be inflicted on the player.

<pre>
public class DamagingBlockComponent implements Component {
    public int timeBetweenDamage = 1000;        //The rate (value in milliseconds) at which the damage is inflicted
    public int blockDamage;                     //The damage the block inflicts to the player
}
</pre>

## DamageSystem

The DamageSystem is the code which applies the damage to players or destroys blocks if on DamagingBlocks.
