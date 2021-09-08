---
posttype: "module" 
title: Hunger
description: "This module introduces Hunger and various related effects."
cover: "./cover.png"
tags: ["Augment","Library"]
---
# Hunger
A Terasology module, as the name implies, that features hunger in the form of a status bar.

## Features
A hunger status bar in the player's HUD, outlined in blue below:
![](media/hud.png)
The player's hunger saturation decreases as time in the world progresses, but replenishes with food and other consumables.

## Getting Started
* Simply create a world with the Hunger module enabled
* As time progresses, you'll notice the hunger bar going down!

## Commands
* `showHunger` - Displays your current food level
* `setHunger <float>` - Sets your current food level
* `setMaxHunger` - Sets your maximum food level
