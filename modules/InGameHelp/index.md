---
posttype: "module" 
title: InGameHelp
description: "Adds an in-game help window primarily for items (what it does, what it is, etc.)"
cover: "./cover.png"
tags: ["Augment"]
---
InGameHelp
============

This module adds a simple in-game help systems for items and other things. It allows for minor categorization of these
items.

===

In order to add an item to the help system. follow the following instructions:

* Open up the item's prefab file.
* Make sure the item in question has a DisplayName component.
* An ItemComponent is optional. But without it, a question-mark icon will be displayed.
* Add the ItemHelp into the prefab.
** "title" sets the title of the help subsection for this item. Leave it as the default unless you want to change up the UI.
** "category" sets what section this help item will be located in. If not specific, it will default to "Items". If you
   specify it, make sure that the item category actually exists.
** "paragraphText" sets the description lines of this help item subsection.

In order to add a new category to the help system, follow the following instructions:

* Clone the ItemsCategory.java file in this module, to your own module.
* Rename the file to "<NAME OF YOUR CATEGORY> Category".
* Change the constant string "name" to <NAME OF YOUR CATEGORY>
* Under a (registered) system in your module, send a new OnAddNewCategoryEvent (through a dummy entity) that has a new
  instance of your created category contained in it (passed in as a creation parameter). Make sure that this is sent
  once during update. The event WILL NOT reach InGameHelp's receiver if the event is sent during initialise or preBegin.
* Now, in your desired item prefabs, in the ItemHelpComponent, set the "category" variable to the name of your new category.
* Start up Terasology, create a new game, open up the help system, and your new category should show up as a tab.