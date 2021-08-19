---
posttype: "module" 
title: Notifications
description: "Show notifications like achievements or other information."
cover: "./cover.png"
tags: ["Augment","Library"]
---
<p align="center">
<img src="./docs/banner.png" alt="Notifications"/>
</p>

# Notifications

This module provides an event-based system to show notifications, e.g., achievements or one-time help notes, in a common
notification area. Messages can be added and removed by sending events.

The system currently only reacts to events without keeping the state of notifications for a player!

## Usage

To show or hide notifications from other modules add a dependency in `module.txt`:

```json5
  { "id": "Notifications", "minVersion": "0.1.0-SNAPSHOT" }
```

The displayed message itself is defined by the `Notification` class. Each message has an `id` to be able to identify 
duplicate messages or remove a specific notification. The system ensures that there is at most one message of the same 
identifier displayed on screen.

A notification may contain an _icon_, displayed on the left. There is room for two brief lines of text, the `title` and
a `subtitle`. See the image below for a visual representation of a notification. As the size of the notification box is
fixed developers should pay attention that the text fits into the available space.

![Notification Overlay](docs/notification.jpg)

Showing and hiding notifications is controlled via events. See the description below for a quick overview. You can find
more detailed information in the JavaDoc.

- `ShowNotificationEvent(notification)` - A request to show a notification to the player in the notification overlay area.
    This event should be targeted at a client entity (an entity with `ClientComponent`). If not specified otherwise 
    notifications will be shown indefinitely. The event allows to set the duration of the notification in in-game
    time (ms).
    
    It is recommended to show a notification for at least 10 seconds to give the player the chance to notice it. The 
    event may be consumed to prevent the message from showing. If a notification with the same `id` is already shown 
    this event is ignored.
- `ExpireNotificationEvent(id)` - removes a notification for the entity it is sent to if present. Otherwise, this event
    is ignored. If not otherwise specified, the notification will be slowly faded out.

## Customization

Customization of the notification system is currently limited. The UI screen `assets/ui/NotificationAreaOverlay.ui` can
be modified via asset override or asset delta to adjust the location where the notification overlay is displayed.

The layout of a notification message is defined by `NotificationRenderer` and only be changed directly in that renderer
class for now. The message box has a fixed size, regardless of the content.
