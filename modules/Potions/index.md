---
posttype: "module" 
title: Potions
description: "A small collection of various potions that can be consumed for several effects."
cover: "./cover.png"
tags: ["Library","Asset"]
---
Potions
============

This module adds several potions which have a variety of effects such as healing, regen, speed increases, and status
ailment cures. This also adds a potion drinking system as well as the ability for other systems to modify the effects.
Moreover, if a potion is durable enough, an empty bottle will be returned following the potion consumption.

The following potions are present in this module:

* All Speed - Combines the effects of the Jump Speed, Swim Speed, and Walk Speed potions.
* Battle - Allows the user to withstand more damage, restores 50 HP, and activates 5 HP per second health regen for 11.5 seconds.
* BlindWalk - Turns the player blind for 5 seconds along with speed decrease (Awaiting API integration for the No_Visibility effect to work)
* Combat - Combines the effects of walk speed, health boost, regeneration, resist physical damage and heal potions. Useful in combat.
* Cure All - Cures all status ailments when consumed.
* Cure Poison - Cures poison status when consumed.
* Divergence - Coincidentally harms and regenerates player's health, but regens in larger amounts.
* Double Jump - Allows the user to double jump for 15 seconds.
* Explosive - When consumed, it produces an explosion that destroys the surrounding area.
* Giga Jump - Triples all jump stats for 10 seconds
* Glue - Reduces the user's walking speed by 10% and prevents them from jumping for 15 seconds.
* Harm - Removes 20 HP from the user instantly.
* Heal - Restores 20 HP to the user instantly.
* Health Boost - Increases the user's base max health by 50% for 30 seconds.
* Hemlock Potion - A more dangerous version of the poison potion, dealing 6 damage per second for up to 15 seconds.
* Immobility Potion - Greatly reduces various mobility stats for 15 seconds.
* Inversion - Disorients the player by inverting the controls (i.e. turning left will turn right).
* Invincible - Makes the user invincible for 10 seconds.
* Item Use Speed - Increases the user's item use speed by 25% for 15 seconds.
* Juggernaut - Restricts the Player's movements in exchange for damage resistance for 10 seconds.
* Jump Speed - Doubles the user's jump speed for 10 seconds.
* Mega Jump - Doubles all jump stats for 10 seconds
* Mobility - For 15 seconds, doubles the user's jump height, walk speed, and swim speed, grants the ability to double jump, but reduces item use speed by 25%.
* Ninja - Speeds up your running and jumping
* Overdrive - Triples the user’s jumping and walking speeds for 11 seconds.
* Poison - Poisons user, dealing 3 damage per second for up to 15 seconds.
* Rage - Triples the user's jump height, walk speed, and swim speed for 15 seconds. However, during this period, it also poisons the user for 3 damage per second.
* Regen - User regenerates 3 HP per second for 10 seconds.
* Regen II - User regenerates 6 HP per second for 10 seconds ( Like regular Regen X 2 )
* Resist Physical - Temporarily increases user's physical defense by 15 for 20 seconds.
* Resist Poison - Reduces the effects of poison statuses by 2 when consumed for 15 seconds.
* Sacred - Regenerates 3 HP per second for 10 seconds, increases the user's base max health by 25% for 30 seconds, and also cures poison status.
* Super Heal - Restores a vast 300 HP to the user.
* Swim Speed - Doubles the user's swim speed for 10 seconds.
* Ultimate - Applies all effects from the positive potions onto the user.
* Ultra Heal - Restores a very vast 500 HP to the user.
* Walk Speed - Doubles the user's walk speed for 10 seconds.

The following potion effects are present in this module:

* CURE_ALL_AILMENTS - Cures all status ailments from target. The `magnitude` and `duration` fields are unused here.
* CURE_POISON - Cures poison status ailment from target. The `magnitude` and `duration` fields are unused here.
* EXPLOSIVE - Explodes all blocks around target for `magnitude` damage over a maximum range of `duration`. The `duration` field is used to dictate range instead of time.
* GLUE - Reduce target's base walk speed to 10% lower and prevents them from jumping for `duration` milliseconds.
* HARM - Removes `magnitude` health. The `duration` field is unused.
* HEAL - Restores `magnitude` health. The `duration` field is unused.
* ITEM_USE_SPEED - Modifies target's base item use speed to be `magnitude` times as fast for `duration` milliseconds.
* JUMP_SPEED - Modifies target's base jumping speed to be `magnitude` times as fast for `duration` milliseconds.
* MULTI_JUMP - Grants target the ability to multi jump `magnitude` times before hitting solid ground for `duration` milliseconds.
* POISON - Inflicts poison status ailment onto target, which damages them for `magnitude` damage per second for `duration` milliseconds.
* REGEN - Regenerates `magnitude` health per second for `duration` milliseconds.
* RESIST_PHYSICAL - Increases physical defense by `magnitude` for `duration` milliseconds.
* RESIST_POISON - Increases poison defense by `magnitude` for `duration` milliseconds.
* SWIM_SPEED - Modifies target's base swimming speed to be `magnitude` times as fast for `duration` milliseconds.
* TEMP_MAX_HEALTH_BOOST - Boosts maximum health value by `magnitude`% for `duration` milliseconds.
* WALK_SPEED - Modifies target's base walking speed to be `magnitude` times as fast for `duration` milliseconds.

## Contribution

Run `groovyw module recurse Potions` command while in the Terasology root folder to fetch and store the module locally. Then fork the module and add a remote reference using the command `git remote add <remote-name> <your fork>` in the `/module/Potions` directory.  

Refer to the [Developer Guide](https://github.com/Terasology/Potions/wiki/Developer-Guide) section in the wiki for further details about how to develop new potions and containers.

Send in PRs to this repository and feel free to add your name to the authors list in the [module.txt file](https://github.com/Terasology/Potions/blob/master/module.txt). Also add credits to [this README](https://github.com/Terasology/Potions/blob/master/README.md) citing sources for icons and textures.

## Credits for images:

* [Trekmarvel](https://github.com/Trekmarvel) for the base potion bottle graphics.
* Regen2PotionBottle.png edited from base by Minege
* Sacred: SacredPotionBottle.png edited from base by smsunarto 

