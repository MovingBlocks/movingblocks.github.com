---
posttype: "module" 
title: PotentialEnergyDevices
description: "A library for creating entities that build up potential energy."
cover: "./cover.png"
tags: ["Library"]
---
#Potential Energy Devices
This module provides a common set of components that can store energy in an entity.

##Storing Energy
###Basic usage on a prefab
```
{
  "PotentialEnergyDevice": {
    "maximumStoredEnergy": 50
  }
}
```

###Defaults
```
{
  "PotentialEnergyDevice": {
    "currentStoredEnergy": 0
    "maximumStoredEnergy": 0
  }
}
```

##Energy Regeneration or Decay
Adding the ```PotentialEnergyRegenComponent``` to an entity that has a ```PotentialEnergyDeviceComponent``` on it will continuously add energy to the current stored energy.
 
###Basic usage on a prefab
```
{
  "PotentialEnergyRegen": {
    "energyPerSecond": -5
  }
}
```

###Defaults
```
{
  "PotentialEnergyRegen": {
    "energyPerSecond": 0
  }
}
```
