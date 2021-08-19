---
posttype: "module" 
title: Anatomy
description: "A basic anatomy system for players, NPCs, and creatures alike."
cover: "./cover.png"
tags: ["Augment","Library"]
---
# Anatomy
A basic anatomy system for players, NPCs, and creatures alike. Intended to be included with entities in other modules. It is made up of several sub-systems (Skeletal and Circulatory) working independently to provide different functionalities to the entity.

### Adding sub-systems
The internal mechanics of a sub-system are entirely up to the content developer but a few things need to be followed to make it properly work along with the Anatomy system.

- ##### Receiving the `AnatomyPartImpactedEvent`-
  The Anatomy system receives the `OnDamagedEvent`, randomly allocates the damage to a body part and sends out the `AnatomyPartImpactedEvent` with the `partId` and damage details. 
  ```
  @ReceiveEvent
    public void onDamage(AnatomyPartImpactedEvent event, EntityRef entityRef, AnatomyComponent anatomyComponent) {
  ```
  The method used in the Skeletal and Circulatory sub-systems to utilise this was to store part healths and deduct the damage dealt from these part healths. This would also entail setting up a regen mechanism using the `DelayedActionTriggeredEvent`.
  
- ##### Adding effects to the `AnatomyStatusGatheringEvent`-
  The `AnatomyStatusGatheringEvent` is sent by the Anatomy system to query sub-systems for the effects that they have applied to the various body parts. The `addEffect` method of the event can be used for this purpose by looping over the different parts.
  ```
  public void addEffect(String partId, String effect) {
  ```
  
- ##### Resetting state when the player respawns-
  When the player respawns, the `OnPlayerRespawnedEvent` is sent. This can be used to reset the part health values and effects. This is as simple as just removing the `InjuredBoneComponent` or its equivalent.
  ```
  @ReceiveEvent
    public void onPlayerRespawn(OnPlayerRespawnedEvent event, EntityRef entityRef, InjuredBoneComponent injuredBoneComponent) {
        entityRef.removeComponent(InjuredBoneComponent.class);
    }
  ```
  