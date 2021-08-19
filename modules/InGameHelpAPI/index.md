---
posttype: "module" 
title: InGameHelpAPI
description: "API for InGameHelp module."
cover: "./cover.png"
tags: ["Library"]
---
InGameHelpAPI
============

This module adds a simple in-game help systems for items and other things. It allows for minor categorization of these
items.

This module is an extension to the InGameHelp module, that contains the InGamHelp registry. The InGameHelpAPI module
needs to be added as a dependency by all modules that want to use the InGameHelp feature. Further, the InGameHelp
has a dependency on the InGameHelpAPI (this) module. This module essentially acts as an interface between the
InGameHelp module and other modules which use it.