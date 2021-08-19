---
posttype: "module" 
title: Projectile
description: "Base module for projectiles"
cover: "./cover.png"
tags: ["Library"]
---
# Projectile
Module for projectiles. 

## Currently Available Projectiles 
* Fireball - Has a health component, is dealt as much damage as it deals.
* Spear - Can be picked up after use
* Grenade

## Documentation 
The ProjectileActionComponent is attached to any entity that is meant to be thrown when activated (mouse right-click) and that carries out an action after collision. The collision fires an HitTargetEvent which contains the following properties,

* instigator
* target 
* origin 
* direction 
* hitPosition 
* hitNormal 

which is intercepted in a CollisionHandler that you can provide specifying custom behaviour on collision. The logic in the [default CollisionHandler](https://github.com/Terasology/Projectile/blob/master/src/main/java/org/terasology/projectile/ProjectileCollisionHandler.java) is as follows
```java
public class ProjectileCollisionHandler extends BaseComponentSystem {
    // Set handler to low priority as it contains override-able default behaviour
    @ReceiveEvent(priority = EventPriority.PRIORITY_LOW)
    public void onCollision(HitTargetEvent event, EntityRef entity, ProjectileActionComponent projectile) {
	    // inflict damage on target
        event.getTarget().send(new DoDamageEvent(projectile.damageAmount, projectile.damageType));
        //reset ProjectileActionComponent to defaults and drop item
        projectile.direction = null;
        projectile.currentVelocity = null;
        projectile.distanceTravelled = 0;
        entity.saveComponent(projectile);
        entity.send(new DropItemEvent(entity.getComponent(LocationComponent.class).getWorldPosition()));
    }
}
```
Projectiles are further customised by their prefabs. The various settings and defaults in ProjectileActionComponent can be found [here](https://github.com/Terasology/Projectile/blob/master/src/main/java/org/terasology/projectile/ProjectileActionComponent.java).

