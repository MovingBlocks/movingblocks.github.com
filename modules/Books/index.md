---
posttype: "module" 
title: Books
description: "This module introduces logic and assets for books and bookcases"
cover: "./cover.png"
tags: ["Library","Asset"]
---
# Books and Bookcases

This module adds the ability to read and write books, as well as store them in bookcases.
This module also adds the ability to edit books and their contents.

The following types of components can be made:
* `Book`
* `Bookcase`


## Contribution

Use `groovyw module get Books`to fetch the module.


### Creating a Book

To create a book, create a prefab similar to ones found [Here](https://github.com/Terasology/Books/tree/master/assets/prefabs) and add the icon from [Here](https://github.com/Terasology/Books/tree/master/assets/textures).
For instance, to create a book called "1984", the prefab should look like:

```json
{
  "parent" : "engine:iconItem",
  "Item" : {
    "icon" : "Books:book",
    "usage" : "ON_USER"
  },
  "DisplayName" : {
    "name" : "1984"
  },
  "Book" : {
    "tint" : [245, 222, 179, 255]
  },
  "InteractionTarget": {},
  "InteractionScreen": {
    "screen": "Books:BookScreen"
  }
} 
```

where `book.png` is the name of the icon in the prefabs folder.
`DisplayName` and `Book` contain information relevant to how the book is displayed.
`InteractionScreen` contains information relevant to how the book is interacted with.
All books should have usage set to `ON_USER`.

### Creating a bookcase

To create a bookcase, create a prefab similar to the one found [Here](https://github.com/Terasology/Books/tree/master/assets/prefabs).
For example, a default bookshelf should look like:

```json
{
  "Bookcase": {},
  "Inventory": {
    "privateToOwner": false,
    "itemSlots": [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
  },
  "RetainBlockInventory": {},
  "PlaySoundAction": {
    "sounds": "engine:click"
  },
  "InteractionTarget": {},
  "InteractionScreen": {
    "screen": "inventory:containerScreen"
  },
  "Network": {
  }
}
```

where `itemSlots` should be filled with 0s as it is empty.
`privateToOwner` details whether or not other users have access to the bookshelf.
`PlaySoundAction` contains the sound played for when the bookshelf is opened.
`InteractionScreen` contains information of how the bookshelf should be interacted with.


## Credits for images:
- Quill - https://openclipart.org/detail/262818/vintage-feather-inkwell
