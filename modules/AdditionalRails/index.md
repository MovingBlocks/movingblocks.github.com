---
posttype: "module" 
title: AdditionalRails
description: "This module adds assets and logic for rails"
cover: "./cover.png"
tags: ["Library","Asset"]
---
# AdditionalRails

AdditionalRails is an extension for the [Rails](https://github.com/Terasology/Rails) module which adds many new carts, rails, and other features.

## Features

Here is a brief list of the features which this module adds:

### Carts
- Activable Cart Example: Prints a message to the logger when is passes over an Activator Rail
- Explosive Cart: Explodes when it passes over an Activator Rail
- Harvesting Cart: Harvests plants from the [SimpleFarming](https://github.com/Terasology/SimpleFarming) module
- Planting Cart: Plants plants from the [SimpleFarming](https://github.com/Terasology/SimpleFarming) module
- Hoover Cart: Picks up items around it when fueled by torches
- Track Layer Cart: Lays tracks from its inventory as it moves
- Tunnel Bore Cart: Lays tracks and digs a 3x3 tunnel as it moves
- Cargo Cart: Holds a lot of items, but gets heavier and moves slower the more it is holding

### Rails
- Booster Rail: Boosts carts that pass over it
- One-way Booster Rail: Boosts carts in only one direction
- Activator Rail: Activates carts that pass over it
- Friction Rail: Has much more friction than other rails

### Switches
- Lever Switch: Controls the rail juntion direction, controlled by 'use target' action (usually 'E' key)
- Signal Switch: Same as the Lever Switch, but controlled by a signal from the [Signalling](https://github.com/Terasology/Signalling) module instead of the player

## Screenshots

![Rail Types](screenshots/railtypes.png)

_Booster Rail, One-way Booster Rail, Activator Rail, and Friction Rail_

![Explosive Cart](screenshots/expcart.png)

_Results of an explosive cart_

![Tunnel Bore](screenshots/tunnel.png)

_Tunnel dug by a Tunnel Bore Cart_

![Lever Switch](screenshots/switch.png)

_Lever Switch in action_
