---
posttype: "module" 
title: MineSweeper
description: "This module allows to play Mine Sweeper in Terasology."
cover: "./cover.png"
tags: []
---
# Minesweeper

The Minesweeper module adds minefields to Terasology. The minefields appear across the world upon loading. The basic goal is to mine all the surrounding blocks and mark all the mines without setting off the entire field.

## Guide

This module adds minefields which naturally generate in the world. In order to make them generate, all you need to do is enable the module. The minefields consist of stone-like blocks which all look the same. However, they are not. Some of them are harmless, but others are mines. The harmless ones can be mined safely, but mines will create a huge explosion, usually destroying the whole minefield, if you try to mine them. The ones on the outside will always be safe, though.

Each block also has a number on it. Similar to the original minesweeper, this number represents the number of mines within a 3x3x3 cube centered around that block, including the block itself if it is a mine. Theoretically, this means that the highest possible number would be a 27, however the minefields are generated in such a way that it will never exceed 16. When a block is destroyed, as long as it isn’t a mine, it will leave behind a floating number with the same value so that you can still use the information.

Any block in the minefield which you think is a mine can be marked using the interaction key, which is `E` by default. If you successfully mark every mine in the field, the entire thing will be cleared and you will receive an ore as a reward. The larger the minefield was, the better the ore that you get is. There is also currently no penalty for marking a block which isn’t a mine, however there's no benefit to it either.

![Minefield with some blocks mined and one mine marked](https://raw.githubusercontent.com/Terasology/Minesweeper/master/image.png)

![Cleared minefield with coal ore reward](https://user-images.githubusercontent.com/1063833/33593053-ad1a4692-d95b-11e7-9116-21ccec981536.jpg)
