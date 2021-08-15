---
posttype: "module" 
title: NameGenerator
description: "This module provides randomized name for different entities."
cover: "./cover.png"
tags: ["Library"]
---
# Name Generator

A module that creates names for different entities using a Markov chain model.
It is based on [David Legare's NameGenerator](https://github.com/excaliburHisSheath/NameGenerator), which is licensed under Creative Commons Attribution-ShareAlike 3.0 Unported License.
The code has been adopted to the use in Terasology.

The original idea was published by [Oh, The Huge Manatee!](http://ohthehugemanatee.net/2009/10/the-magical-word-o-matic-or-markov-text-analysis-for-fun-and-non-profit/).
This website also contains an excellent explanation of the functionality of the algorithm.

## Usage Guide

Let's start with an example:

```java
TownNameProvider townNameProv = new TownNameProvider(12345);
String name = townNameProv.generateName();
```

Simple as that. You can also explicitly select a theme:

```java
TownNameProvider townNameProv = TownNameProvider(123455, TownAssetTheme.FANTASY);
```

You can also tweak the generated names:

```java
TownAffinityVector aff = TownAffinityVector.create().prefix(0.5);
String name = townNameProv.generateName(aff);
```

Half of the generated names will have a prefix such as "Market", "Old" or "Nether".
Going one step further, you can even combine different name affinities:

```java
TownAffinityVector.create().prefix(0.33).postfix(0.33);
```

This will give you 1/3 prefixed names, 1/3 postfixed names and 1/3 without.

>Nether Kirchen,
>Dunharsden,
>Southophall,
>Green Hophall,
>Old Guildhey,
>Halgh Barrens

Similarly, you can create creature names:

```java
CreatureNameProvider p = new CreatureNameProvider(123, CreatureAssetTheme.ELVEN);
CreatureAffinityVector a = CreatureAffinityVector.create().maleOnly().nobility(0.5);
String name = p.generateName(a);
```

This gives:

>Gweradrae Nagalan the Wise,
>Suss Camth,
>Vel Our,
>Estalandra Ilve,
>Laethalandrieldralae Whiiliazym the Noble

## License

This module is licensed under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).
